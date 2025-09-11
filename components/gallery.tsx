import { FlatList, Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";

const Gallery = () => {

    const data =
    [
        {
            title: "Cosmic Driftwood Lamp",
            image: { uri: 'https://picsum.photos/201' },
            price: 75.50,
            description: "A unique lamp crafted from salvaged driftwood and embedded with bioluminescent crystals. Its soft glow creates a serene, otherworldly atmosphere in any room."
        },
        {
            title: "Quantum Coffee Mug",
            image: { uri: 'https://picsum.photos/202' },
            price: 18.99,
            description: "This mug changes its internal temperature based on the ambient noise in the room, keeping your beverage perfectly hot or cold. A small LCD screen displays the current state of its quantum entanglement field."
        },
        {
            title: "Echoing Hourglass",
            image: { uri: 'https://picsum.photos/203' },
            price: 42.00,
            description: "Filled with fine, shimmering sand that, when turned, whispers memories of the past. The echoes are faint and fleeting, but some users report hearing snippets of forgotten conversations."
        },
        {
            title: "Aether-Infused Quill",
            image: { uri: 'https://picsum.photos/204' },
            price: 120.75,
            description: "A writing instrument that never runs out of ink. The aetheric energy it draws from the air imbues your words with a subtle, yet powerful, sense of purpose."
        },
        {
            title: "The Mnemonic Compass",
            image: { uri: 'https://picsum.photos/205' },
            price: 250.00,
            description: "A hand-carved compass that points not to true north, but to the location of your most cherished memory. The needle trembles when you are close to a place of personal significance."
        },
        {
            title: "Solaris Sunglasses",
            image: { uri: 'https://picsum.photos/206' },
            price: 89.50,
            description: "These sunglasses don't just block UV rays; they convert excess sunlight into a soft, calming light that relieves eye strain and improves mood."
        },
        {
            title: "Digital Ghost Catcher",
            image: { uri: 'https://picsum.photos/207' },
            price: 300.25,
            description: "A small, handheld device that can detect and record low-frequency spiritual signatures. The recordings are often static, but a careful listener can sometimes make out ghostly whispers."
        },
        {
            title: "The Wandering Teapot",
            image: { uri: 'https://picsum.photos/208' },
            price: 55.00,
            description: "A ceramic teapot that gently levitates a few inches off the table. It floats just enough to prevent a ring, but remains tethered to the ground, so it doesn't wander too far."
        },
        {
            title: "Whispering Windsock",
            image: { uri: 'https://picsum.photos/209' },
            price: 35.80,
            description: "Made from silk infused with a delicate enchantment, this windsock doesn't just show wind direction—it murmurs predictions of the weather in a soft, musical tone."
        },
        {
            title: "Gravity-Defying Coaster Set",
            image: { uri: 'https://picsum.photos/210' },
            price: 28.00,
            description: "A set of four coasters that create a small, localized anti-gravity field. Your drink will float slightly above the surface, preventing spills and protecting your table."
        },
        {
            title: "The Chronometer Pendant",
            image: { uri: 'https://picsum.photos/211' },
            price: 195.00,
            description: "A beautiful, brass pendant that silently counts down to a moment of great importance in your life. Its purpose is unknown, but its ticking is a constant reminder of time's passage."
        },
        {
            title: "Labyrinthine Planter",
            image: { uri: 'https://picsum.photos/212' },
            price: 68.90,
            description: "A ceramic planter with an intricate, maze-like design. As your plant's roots grow, they follow the labyrinth, resulting in stronger, more resilient growth."
        },
        {
            title: "Ephemeral Scent Diffuser",
            image: { uri: 'https://picsum.photos/213' },
            price: 99.00,
            description: "This diffuser releases scents from moments in time, rather than bottled oils. Each fragrance is tied to a specific feeling, like a 'hint of summer rain' or 'the nostalgia of old books'."
        },
        {
            title: "The Dreamweaver's Blanket",
            image: { uri: 'https://picsum.photos/214' },
            price: 150.00,
            description: "A plush, woven blanket that promotes vivid and memorable dreams. Simply wrap yourself in it and the intricate patterns will guide your mind to new and exciting dreamscapes."
        },
        {
            title: "Harmonic Bells",
            image: { uri: 'https://picsum.photos/215' },
            price: 210.30,
            description: "A set of three chimes that produce a unique tone. When all three are rung in the correct sequence, they produce a sound that harmonizes with your mind, bringing a sense of calm and clarity."
        },
        {
            title: "The Resilient Umbrella",
            image: { uri: 'https://picsum.photos/216' },
            price: 45.00,
            description: "An umbrella that self-repairs. If a strong gust of wind inverts it, the material instantly snaps back into place, unaffected by the wind and rain."
        },
        {
            title: "Symphonic Water Glass",
            image: { uri: 'https://picsum.photos/217' },
            price: 22.50,
            description: "A glass that plays a small melody each time it is filled with water. The tune changes depending on the temperature of the liquid."
        },
        {
            title: "The Verdant Monocle",
            image: { uri: 'https://picsum.photos/218' },
            price: 78.00,
            description: "A monocle with a lens that, when looked through, makes all plants appear more vibrant and full of life, as if you were seeing them for the first time."
        },
        {
            title: "Stardust Shaker",
            image: { uri: 'https://picsum.photos/219' },
            price: 13.50,
            description: "A small jar filled with fine, luminescent dust. When shaken, it creates a dazzling, miniature galaxy that slowly fades over a few minutes."
        },
        {
            title: "The Temporal Calendar",
            image: { uri: 'https://picsum.photos/220' },
            price: 180.00,
            description: "A perpetual calendar that displays not just the current date, but also a glimpse of a future event related to the day, offering a subtle hint of what's to come."
        },
        {
            title: "Aurora Tapestry",
            image: { uri: 'https://picsum.photos/221' },
            price: 135.00,
            description: "A woven tapestry that shimmers with colors resembling the northern lights. Its hues shift gently depending on the viewer’s mood."
        },
        {
            title: "Phoenix Feather Bookmark",
            image: { uri: 'https://picsum.photos/222' },
            price: 27.75,
            description: "A slim, fiery feather that never burns out. When placed in a book, the pages around it stay warm and lightly illuminated."
        },
        {
            title: "Eternal Candle",
            image: { uri: 'https://picsum.photos/223' },
            price: 52.20,
            description: "A candle that never diminishes. The flame dances in colors unseen, casting shadows that tell fleeting stories on your walls."
        },
        {
            title: "Mirage Glasses",
            image: { uri: 'https://picsum.photos/224' },
            price: 110.00,
            description: "Spectacles that let you glimpse into alternate versions of reality for a few seconds, showing what might have been or could be."
        },
        {
            title: "Celestial Pocket Globe",
            image: { uri: 'https://picsum.photos/225' },
            price: 88.40,
            description: "A palm-sized globe that displays not Earth, but a shifting map of constellations across the cosmos."
        },
        {
            title: "Siren’s Music Box",
            image: { uri: 'https://picsum.photos/226' },
            price: 145.50,
            description: "A small box that plays hauntingly beautiful ocean melodies. Sometimes, the sound of waves and distant voices can be heard."
        },
        {
            title: "Runic Chess Set",
            image: { uri: 'https://picsum.photos/227' },
            price: 200.00,
            description: "An ornate chess set where the pieces glow faintly and move themselves when commanded by voice."
        },
        {
            title: "Obsidian Hour Candle",
            image: { uri: 'https://picsum.photos/228' },
            price: 33.30,
            description: "This black candle burns exactly for one hour, and as it melts, it reveals a whispered secret from the past."
        },
        {
            title: "The Infinite Sketchpad",
            image: { uri: 'https://picsum.photos/229' },
            price: 125.00,
            description: "A pad of paper where each page reappears blank once torn out, preserving the drawing as a permanent illusion in midair."
        },
        {
            title: "Clockwork Sparrow",
            image: { uri: 'https://picsum.photos/230' },
            price: 310.00,
            description: "A mechanical bird that sings at dawn and dusk. Its melody changes subtly with the seasons."
        },
        {
            title: "Chameleon Cloak",
            image: { uri: 'https://picsum.photos/231' },
            price: 450.00,
            description: "A lightweight cloak that shifts color and texture to match its surroundings, offering subtle camouflage."
        },
        {
            title: "Moonlit Ink Bottle",
            image: { uri: 'https://picsum.photos/232' },
            price: 64.90,
            description: "A vial of silver ink that glows faintly in the dark. Words written with it only appear under moonlight."
        },
        {
            title: "Oracle Dice",
            image: { uri: 'https://picsum.photos/233' },
            price: 39.00,
            description: "A pair of dice that whisper cryptic predictions about the near future whenever rolled."
        },
        {
            title: "The Floating Shelf",
            image: { uri: 'https://picsum.photos/234' },
            price: 175.00,
            description: "A wooden shelf that hovers without any visible support, adjusting its height to match the user’s reach."
        },
        {
            title: "Velvet Dream Mask",
            image: { uri: 'https://picsum.photos/235' },
            price: 58.75,
            description: "A sleep mask that guides the wearer into restful, imaginative dreams with vivid clarity."
        },
        {
            title: "Eclipse Lantern",
            image: { uri: 'https://picsum.photos/236' },
            price: 90.00,
            description: "A lantern that mimics the phases of an eclipse when lit, casting a shifting play of light and shadow."
        },
        {
            title: "Whale Song Shell",
            image: { uri: 'https://picsum.photos/237' },
            price: 72.25,
            description: "A large seashell that, when held to the ear, plays ancient whale songs mixed with soothing ocean tides."
        },
        {
            title: "Spectral Keyring",
            image: { uri: 'https://picsum.photos/238' },
            price: 40.00,
            description: "A set of translucent keys that unlock hidden drawers, forgotten memories, or sometimes nothing at all."
        },
        {
            title: "Echo Chamber Box",
            image: { uri: 'https://picsum.photos/239' },
            price: 115.60,
            description: "A small box that, when spoken into, repeats your words years later at an unexpected moment."
        },
        {
            title: "Wyrmscale Journal",
            image: { uri: 'https://picsum.photos/240' },
            price: 140.00,
            description: "A notebook bound in shimmering scales. Anything written inside becomes impossible to forget."
        },
        {
            title: "The Lantern of Reveries",
            image: { uri: 'https://picsum.photos/241' },
            price: 230.00,
            description: "This lantern glows brighter when near someone who is daydreaming, illuminating their thoughts as soft colors."
        },
        {
            title: "Crystalline Teacup",
            image: { uri: 'https://picsum.photos/242' },
            price: 47.90,
            description: "A delicate cup that changes its hue depending on the emotions of the person drinking from it."
        },
        {
            title: "Twilight Hourglass",
            image: { uri: 'https://picsum.photos/243' },
            price: 160.00,
            description: "An hourglass where the sand alternates between gold and silver, counting both time passed and time yet to come."
        },
        {
            title: "Phantom Mirror",
            image: { uri: 'https://picsum.photos/244' },
            price: 275.00,
            description: "A tall mirror that occasionally shows a shadow of who you might become rather than your current reflection."
        },
        {
            title: "Gilded Compass Rose",
            image: { uri: 'https://picsum.photos/245' },
            price: 89.00,
            description: "An ornate medallion that hums softly when pointing towards untraveled paths or forgotten places."
        },
        {
            title: "Celestial Ink Quill",
            image: { uri: 'https://picsum.photos/246' },
            price: 118.00,
            description: "A starry quill that writes words which glow faintly until the sunrise, fading into normal ink thereafter."
        },
        {
            title: "The Shifting Cube",
            image: { uri: 'https://picsum.photos/247' },
            price: 52.40,
            description: "A puzzle cube that rearranges itself into new forms each night, presenting endless configurations."
        },
        {
            title: "Thornless Rose Dome",
            image: { uri: 'https://picsum.photos/248' },
            price: 95.00,
            description: "A preserved rose under glass that blooms anew each morning, releasing a subtle fragrance."
        },
        {
            title: "Harmony Stone",
            image: { uri: 'https://picsum.photos/249' },
            price: 33.80,
            description: "A smooth stone that vibrates gently when held by more than one person, syncing their heartbeats for a moment."
        },
        {
            title: "Silent Violin",
            image: require("../assets/images/ejemplo-foto.jpg"),
            price: 400.00,
            description: "A violin that produces no sound to the ear, but resonates directly in the listener’s mind as pure emotion."
        }
    ];


    type ItemProps = {
        title: string,
        description: string,
        image: ImageSourcePropType,
        price: number
    }

    const Item = (props: ItemProps) => {
        return (
            <View style={styles.item}>
                <View style= {styles.imageContainer}>
                    <Image source={props.image} style={styles.logo}/>
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.title}>{props.title}</Text>
                    <Text style={styles.price}>$ {props.price}</Text>
                </View>
            </View>
        )
    }

    return (
        <FlatList data={data} renderItem={ ({item}) => (<Item title={item.title} description={item.description} image={item.image} price={item.price}/>)}/>
    )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#fcf7f7ff',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        borderRadius: 15,
        borderColor: 'black',
        borderWidth: 1,
        height: 80
    },
    logo: {
        height: '60%',
        width: '60%',
    },
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    infoContainer: {
        flex: 3
    },
    title: {
        fontSize: 17
    },
    price: {
        fontSize: 16
    }
})

export default Gallery