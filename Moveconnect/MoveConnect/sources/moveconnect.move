/*
/// Module: moveconnect
module moveconnect::moveconnect;
*/

// For Move coding conventions, see
// https://docs.sui.io/concepts/sui-move-concepts/conventions


module moveconnect::moveconnect {
    use std::string::{Self, String};
    use std::vector;
    use sui::object::{Self, UID};
    use sui::transfer;
    use sui::tx_context::{Self, TxContext};
    use sui::event;
    use sui::clock::{Self, Clock};
    use sui::package;
    use sui::display;
    // ====================================================
    // 1. DATA STRUCTURES (Your "Database Tables")
    // ====================================================

    // The Main User Profile
    public struct Profile has key, store {
        id: UID,
        name: String,
        bio: String,
        twitter: String,
        linkedin: String, // Added as requested
        avatar_url: String, // URL to image (Walrus or IPFS)
        contacts: vector<address> // List of wallet addresses you connected with
    }

    // The Event Badge (Proof of Attendance)
    public struct Badge has key, store {
        id: UID,
        event_name: String,
        image_url: String,
        timestamp_ms: u64,
    }

    // Events (To help your Frontend update automatically)
    public struct ProfileCreated has copy, drop {
        user: address,
        profile_id: ID,
        name: String
    }

    public struct ConnectionAdded has copy, drop {
        user: address,
        new_contact: address
    }

    public struct BadgeMinted has copy, drop {
        recipient: address,
        event_name: String
    }

    // ====================================================
    // 2. CRUD FUNCTIONS (The Logic)
    // ====================================================

    // --- CREATE (C) ---

    // Create a new Profile. 
    // This is called AFTER the user logs in with Google (zkLogin) or Wallet.
    public entry fun create_profile(
        name: String,
        bio: String,
        twitter: String,
        linkedin: String,
        avatar_url: String,
        ctx: &mut TxContext
    ) {
        let sender = tx_context::sender(ctx);

        let profile = Profile {
            id: object::new(ctx),
            name,
            bio,
            twitter,
            linkedin,
            avatar_url,
            contacts: vector::empty()
        };

        // Emit event so the frontend knows it happened
        event::emit(ProfileCreated {
            user: sender,
            profile_id: object::id(&profile),
            name: profile.name
        });

        // Send the profile to the user
        transfer::transfer(profile, sender);
    }

    // --- READ (R) ---
    // *Note: In Sui, "Reading" is usually done on the Frontend using the API, 
    // but you can add getter functions if you want other contracts to read this data.*

    // --- UPDATE (U) ---

    // Update the Profile details.
    public entry fun update_profile(
        profile: &mut Profile,
        name: String,
        bio: String,
        twitter: String,
        linkedin: String,
        avatar_url: String,
        _ctx: &mut TxContext
    ) {
        profile.name = name;
        profile.bio = bio;
        profile.twitter = twitter;
        profile.linkedin = linkedin;
        profile.avatar_url = avatar_url;
    }

    // Add a Connection (The QR Code Scan Logic)
    public entry fun add_connection(
        profile: &mut Profile,
        new_contact: address,
        _ctx: &mut TxContext
    ) {
        // Prevent adding yourself
        // (Optional check, good for hackathon polish)
        
        // Add to the list
        vector::push_back(&mut profile.contacts, new_contact);

        event::emit(ConnectionAdded {
            user: tx_context::sender(_ctx),
            new_contact
        });
    }

    // --- BADGE LOGIC ---

    // Mint a Badge to a user (Event Organizer functionality)
    public entry fun mint_badge(
        recipient: address,
        event_name: String,
        image_url: String,
        clock: &Clock,
        ctx: &mut TxContext
    ) {
        let badge = Badge {
            id: object::new(ctx),
            event_name,
            image_url,
            timestamp_ms: clock::timestamp_ms(clock)
        };

        event::emit(BadgeMinted {
            recipient,
            event_name: badge.event_name
        });

        transfer::public_transfer(badge, recipient);
    }


// 1. One-Time Witness (OTW)
    // FIX: Renamed from CORE to MOVECONNECT to match module name
    public struct MOVECONNECT has drop {}

    // FIX: Updated argument type to MOVECONNECT
    fun init(otw: MOVECONNECT, ctx: &mut TxContext) {
        let publisher = package::claim(otw, ctx);

        // 2. Define the Display Keys
        let keys = vector[
            string::utf8(b"name"),
            string::utf8(b"link"),
            string::utf8(b"image_url"),
            string::utf8(b"description"),
            string::utf8(b"project_url"),
            string::utf8(b"creator"),
        ];

        // 3. Define the Display Values
        let values = vector[
            string::utf8(b"{event_name}"),
            string::utf8(b"https://moveconnect.vercel.app/badge/{id}"),
            string::utf8(b"{image_url}"),
            string::utf8(b"Proof of attendance for {event_name}"),
            string::utf8(b"https://moveconnect.vercel.app"),
            string::utf8(b"MoveConnect Team"),
        ];

        // 4. Create and Update the Display
        let mut display = display::new_with_fields<Badge>(
            &publisher, keys, values, ctx
        );

        // Commit the changes
        display::update_version(&mut display);

        // 5. Share the Publisher and Display objects
        transfer::public_transfer(publisher, tx_context::sender(ctx));
        transfer::public_transfer(display, tx_context::sender(ctx));
    }
}