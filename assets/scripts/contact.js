const searchFriends = () => {


// JSON object
const arrayJson = [
    {
      "Timestamp": "5/27/2020 9:36:46",
      "Email Address": "adam.tzimika-howard@student.tdsb.on.ca",
      "First Name": "Adam",
      "Last Name": "Tzimika-Howard",
      "Grade": 11,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "Harry Potter",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Drawing",
      "The theme of your art (choose all that apply)": "Fiction",
      "Style (choose all that apply)": "Portraiture Art",
      "Medium (choose all that apply)": "Pencil",
      "Subject (choose all that apply)": "Portrait",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "Adam Tzimika-Howard-Harry Potter",
      "Please upload your art here.": "https://drive.google.com/uc?id=1a9bSWmaV53EKJDHqiffwXBnLYxIqJjju"
    },
    {
      "Timestamp": "5/27/2020 23:11:49",
      "Email Address": "afia.semonty2@student.tdsb.on.ca",
      "First Name": "Afia",
      "Last Name": "Semonty",
      "Grade": 9,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Mr. Bryan",
      "Name of your piece of artwork": "The Enchanted Place",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Other",
      "The theme of your art (choose all that apply)": "Fiction",
      "Style (choose all that apply)": "Abstract, Fine Art, Photography, 3D Diorama Art",
      "Medium (choose all that apply)": "Acrylic, Clay, Paper Mâché, Wires, Plastic Plants, Rocks, Fairy Lights, etc.",
      "Subject (choose all that apply)": "Landscape, Narrative, Nature",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "The Enchanted Place",
      "Please upload your art here.": "https://drive.google.com/uc?id=1RopVEtGV4UTRzH5ZRLT9vFUHTlSCKlKH"
    },
    {
      "Timestamp": "5/27/2020 23:20:08",
      "Email Address": "afia.semonty2@student.tdsb.on.ca",
      "First Name": "Afia",
      "Last Name": "Semonty",
      "Grade": 9,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Mr. Bryan",
      "Name of your piece of artwork": "Sword of Fallen Giants",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Drawing",
      "The theme of your art (choose all that apply)": "Fiction",
      "Style (choose all that apply)": "Fine Art",
      "Medium (choose all that apply)": "Pencil",
      "Subject (choose all that apply)": "Landscape, Narrative",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "Sword of Fallen Giants",
      "Please upload your art here.": "https://drive.google.com/uc?id=1huXHPMGxbbA1Qr0U5RqyhCu-CCWSAVF6"
    },
    {
      "Timestamp": "5/27/2020 23:25:27",
      "Email Address": "afia.semonty2@student.tdsb.on.ca",
      "First Name": "Afia",
      "Last Name": "Semonty",
      "Grade": 9,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Mr. Bryan",
      "Name of your piece of artwork": "Colour Wheel",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Other",
      "The theme of your art (choose all that apply)": "Culture",
      "Style (choose all that apply)": "Figurative Art, Fine Art",
      "Medium (choose all that apply)": "Acrylic, Ink, Watercolor",
      "Subject (choose all that apply)": "Narrative, Nature",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "Colour Wheel",
      "Please upload your art here.": "https://drive.google.com/uc?id=1W74cTlv1LmU0M3L95B78vEufR0GfHRpz"
    },
    {
      "Timestamp": "5/26/2020 10:08:21",
      "Email Address": "ani.ungerbrandt@student.tdsb.on.ca",
      "First Name": "Ani",
      "Last Name": "Unger Brandt",
      "Grade": 10,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "Daisy Chain",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "You need connections in all of your relationships. In this simple daisy chain all of the connections are still growing, this represents all of the living connections with all family members and friends. The daisies represent the simplest beauty’s and pleasures in life.",
      "Category": "Drawing",
      "The theme of your art (choose all that apply)": "Community",
      "Style (choose all that apply)": "Folk Art",
      "Medium (choose all that apply)": "Pencil",
      "Subject (choose all that apply)": "Nature",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "Daisy Chain",
      "Please upload your art here.": "https://drive.google.com/uc?id=19qQq6TWvvn41PrqqBKJ4_L2xhNGZGDPw"
    },
    {
      "Timestamp": "5/20/2020 9:46:05",
      "Email Address": "anthony.laylor@student.tdsb.on.ca",
      "First Name": "Anthony",
      "Last Name": "Laylor",
      "Grade": 9,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Mr. Bryan",
      "Name of your piece of artwork": "World Of Dreams",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Drawing",
      "The theme of your art (choose all that apply)": "Fiction",
      "Style (choose all that apply)": "Fine Art",
      "Medium (choose all that apply)": "Digital",
      "Subject (choose all that apply)": "Architecture, Landscape",
      "What is the orientation of your art?": "Horizontal",
      "Please enter the exact name of your artwork, including the extension:": "World Of Dreams",
      "Please upload your art here.": "https://drive.google.com/uc?id=1ivNQuitIVkLt5xVbqeHTCbOgmlqpghcy"
    },
    {
      "Timestamp": "5/20/2020 9:49:37",
      "Email Address": "anthony.laylor@student.tdsb.on.ca",
      "First Name": "Anthony",
      "Last Name": "Laylor",
      "Grade": 9,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Mr. Bryan",
      "Name of your piece of artwork": "Condemned",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Drawing",
      "The theme of your art (choose all that apply)": "Fiction",
      "Style (choose all that apply)": "Fine Art",
      "Medium (choose all that apply)": "Ink, Pencil",
      "Subject (choose all that apply)": "Architecture, Landscape, Nature",
      "What is the orientation of your art?": "Horizontal",
      "Please enter the exact name of your artwork, including the extension:": "Condemned",
      "Please upload your art here.": "https://drive.google.com/uc?id=1zru6kslLHZizqk1wsnaAK1aOiXSHS8Lt"
    },
    {
      "Timestamp": "5/20/2020 9:51:44",
      "Email Address": "anthony.laylor@student.tdsb.on.ca",
      "First Name": "Anthony",
      "Last Name": "Laylor",
      "Grade": 9,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Mr. Bryan",
      "Name of your piece of artwork": "World Of Dreams",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Drawing",
      "The theme of your art (choose all that apply)": "Fiction",
      "Style (choose all that apply)": "Fine Art",
      "Medium (choose all that apply)": "Digital",
      "Subject (choose all that apply)": "Architecture, Landscape",
      "What is the orientation of your art?": "Horizontal",
      "Please enter the exact name of your artwork, including the extension:": "World Of Dreams",
      "Please upload your art here.": "https://drive.google.com/uc?id=1mQyj53qNdziQZXedhtlBVIFnl0RiOPtX"
    },
    {
      "Timestamp": "5/28/2020 3:50:36",
      "Email Address": "ashley.wong@student.tdsb.on.ca",
      "First Name": "Ashley",
      "Last Name": "Wong",
      "Grade": 12,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "Smokes against the world",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Painting",
      "The theme of your art (choose all that apply)": "Social Issues",
      "Style (choose all that apply)": "Figurative Art, Fine Art, Realism",
      "Medium (choose all that apply)": "Acrylic",
      "Subject (choose all that apply)": "Architecture, Narrative, Portrait",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "Ashley-Wong-Smokes Against The World",
      "Please upload your art here.": "https://drive.google.com/uc?id=1yKnIRXFQceAAP-EKJxdQXVVrFzqnaeE9"
    },
    {
      "Timestamp": "5/28/2020 3:59:28",
      "Email Address": "ashley.wong@student.tdsb.on.ca",
      "First Name": "Ashley",
      "Last Name": "Wong",
      "Grade": 12,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "The Reddest of em all",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Painting",
      "The theme of your art (choose all that apply)": "Values (love, freedom...)",
      "Style (choose all that apply)": "Fine Art, Realism",
      "Medium (choose all that apply)": "Acrylic",
      "Subject (choose all that apply)": "Nature",
      "What is the orientation of your art?": "Horizontal",
      "Please enter the exact name of your artwork, including the extension:": "The Reddest Of Em All.JPEG",
      "Please upload your art here.": "https://drive.google.com/uc?id=1h8CTRoLA523FPR4jfiHtPCZGGECHgHwF"
    },
    {
      "Timestamp": "5/28/2020 4:02:31",
      "Email Address": "ashley.wong@student.tdsb.on.ca",
      "First Name": "Ashley",
      "Last Name": "Wong",
      "Grade": 12,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "Egg-cellent",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Drawing",
      "The theme of your art (choose all that apply)": "Values (love, freedom...)",
      "Style (choose all that apply)": "Fine Art, Realism",
      "Medium (choose all that apply)": "Pencil",
      "Subject (choose all that apply)": "Still Life",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "Ashley_Wong_Egg-Cellent.Jpeg",
      "Please upload your art here.": "https://drive.google.com/uc?id=1AEBckOT-YbqKQCyfXYSlFHYgNoqEi5N1"
    },
    {
      "Timestamp": "5/28/2020 3:53:36",
      "Email Address": "ashley.wong@student.tdsb.on.ca",
      "First Name": "Ashley",
      "Last Name": "Wong",
      "Grade": 12,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "Savory Thoughts",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Painting",
      "The theme of your art (choose all that apply)": "Values (love, freedom...)",
      "Style (choose all that apply)": "Fine Art, Realism",
      "Medium (choose all that apply)": "Acrylic",
      "Subject (choose all that apply)": "Still Life",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "Ashley-Wong-Savory Thoughts",
      "Please upload your art here.": "https://drive.google.com/uc?id=1hwnGrBtwUBL3DA5lJyBiaUkkwsdDtUsQ"
    },
    {
      "Timestamp": "5/28/2020 3:57:04",
      "Email Address": "ashley.wong@student.tdsb.on.ca",
      "First Name": "Ashley",
      "Last Name": "Wong",
      "Grade": 12,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "A Ravens Call",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Painting",
      "The theme of your art (choose all that apply)": "Fiction, Social Issues",
      "Style (choose all that apply)": "Fine Art",
      "Medium (choose all that apply)": "Acrylic",
      "Subject (choose all that apply)": "Animal, Narrative",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "A Ravens Call. JPEG",
      "Please upload your art here.": "https://drive.google.com/uc?id=17FIFbizzjLEjrj1BM_aAzCp7x3cn1DZK"
    },
    {
      "Timestamp": "5/26/2020 13:42:41",
      "Email Address": "beatrice.wichert@student.tdsb.on.ca",
      "First Name": "Beatrice",
      "Last Name": "Wichert",
      "Grade": 11,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "Solène, Slayer of Evil",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "Dragons have always been a subject of interest to me, with their elegant shapes and majestic airs. Making Solène (yes I named her) out of clay was magical because the earthy material felt alive, sometimes even giving off heat. This is my second model, and although neither one survived the kiln I enjoyed every minute of making them. For me, this baby dragon represents innocence, perseverance, and the beauty that is born out of our imaginations. I am very glad that I finally have the chance to share my most prized creation, and I hope she will inspire you as she did me.",
      "Category": "Sculpture",
      "The theme of your art (choose all that apply)": "Fiction",
      "Style (choose all that apply)": "Fine Art",
      "Medium (choose all that apply)": "Clay",
      "Subject (choose all that apply)": "Animal",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "Beatrice-Wichert-Solène, Slayer of Evil.jpg",
      "Please upload your art here.": "https://drive.google.com/uc?id=14RRpiCBw-s8rgRJ21oLsdt23CT87QkSv"
    },
    {
      "Timestamp": "5/25/2020 15:42:16",
      "Email Address": "bipon.roy@student.tdsb.on.ca",
      "First Name": "Bipon",
      "Last Name": "Roy",
      "Grade": 12,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "I am not taking art this year, but have taken it another year in high school",
      "Name of your piece of artwork": "A Moment in Time",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Photography",
      "The theme of your art (choose all that apply)": "Community",
      "Style (choose all that apply)": "Fine Art",
      "Medium (choose all that apply)": "Digital",
      "Subject (choose all that apply)": "Architecture, Landscape",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "A Moment in Time.jpg",
      "Please upload your art here.": "https://drive.google.com/uc?id=1Qu8_77Nb8UjmBvRplXrawwyCkapZL-Vb"
    },
    {
      "Timestamp": "5/25/2020 15:57:33",
      "Email Address": "bipon.roy@student.tdsb.on.ca",
      "First Name": "Bipon",
      "Last Name": "Roy",
      "Grade": 12,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "I am not taking art this year, but have taken it another year in high school",
      "Name of your piece of artwork": "Soaring Above the City",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Photography",
      "The theme of your art (choose all that apply)": "Community",
      "Style (choose all that apply)": "Street Art",
      "Medium (choose all that apply)": "Digital",
      "Subject (choose all that apply)": "Architecture",
      "What is the orientation of your art?": "Horizontal",
      "Please enter the exact name of your artwork, including the extension:": "Soaring Above the City.jpg",
      "Please upload your art here.": "https://drive.google.com/uc?id=1nhN809r4bdK_oJGd3D72C14XHahZK91F"
    },
    {
      "Timestamp": "5/25/2020 16:02:11",
      "Email Address": "bipon.roy@student.tdsb.on.ca",
      "First Name": "Bipon",
      "Last Name": "Roy",
      "Grade": 12,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "I am not taking art this year, but have taken it another year in high school",
      "Name of your piece of artwork": "The End of Summer",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Photography",
      "The theme of your art (choose all that apply)": "Community",
      "Style (choose all that apply)": "Street Art",
      "Medium (choose all that apply)": "Digital",
      "Subject (choose all that apply)": "Architecture",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "The End of Summer.jpg",
      "Please upload your art here.": "https://drive.google.com/uc?id=1gqPBsuh_OMdeCl0hQu-H4KdTzmQkwVMr"
    },
    {
      "Timestamp": "5/20/2020 17:02:56",
      "Email Address": "bradley.watt-takagi@student.tdsb.on.ca",
      "First Name": "Bradley",
      "Last Name": "Watt-Takagi",
      "Grade": 9,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Mr. Bryan",
      "Name of your piece of artwork": "Aldwych Park",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Minecraft build",
      "The theme of your art (choose all that apply)": "Community",
      "Style (choose all that apply)": "Cubism",
      "Medium (choose all that apply)": "Digital",
      "Subject (choose all that apply)": "Architecture",
      "What is the orientation of your art?": "Horizontal",
      "Please enter the exact name of your artwork, including the extension:": "Bradley-Watt-Takagi-Aldwych Park.png",
      "Please upload your art here.": "https://drive.google.com/uc?id=1CfW_rEEBiD3B8J0i9Dnjoe6cQEcdlGvC"
    },
    {
      "Timestamp": "5/28/2020 15:42:59",
      "Email Address": "carol.jokinen@tdsb.on.ca",
      "First Name": "Carol",
      "Last Name": "Jokinen",
      "Grade": "Staff",
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "I am staff",
      "Name of your piece of artwork": "Disco Tiger",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Painting",
      "The theme of your art (choose all that apply)": "Fiction",
      "Style (choose all that apply)": "Abstract",
      "Medium (choose all that apply)": "Resin, acrylic, glass, glitter",
      "Subject (choose all that apply)": "Nature",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "Disco Tiger.jpg",
      "Please upload your art here.": "https://drive.google.com/uc?id=1agF9buLCeoPzD72r6nj6e5rWGfxtZOrL"
    },
    {
      "Timestamp": "5/25/2020 12:33:19",
      "Email Address": "cheyenne.newton@student.tdsb.on.ca",
      "First Name": "Cheyenne",
      "Last Name": "Newton",
      "Grade": 9,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "Star Girl's Pyre",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "Cheyenne Newton: digital artist: \"The women in the 18th century were usually burned at the stake if seen doing witchcraft, or anything only labelled \"masculine\". This shows that nobody was exempt from it. Even teenagers and children were burned.",
      "Category": "Drawing",
      "The theme of your art (choose all that apply)": "Religious",
      "Style (choose all that apply)": "Fine Art",
      "Medium (choose all that apply)": "Digital",
      "Subject (choose all that apply)": "Portrait",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "Aiko Nakamura, Star Girl's Pyre",
      "Please upload your art here.": "https://drive.google.com/uc?id=1xQ2-IcyV1TwfNJOfn1EJxqlzZlz3UcvF"
    },
    {
      "Timestamp": "5/25/2020 17:36:20",
      "Email Address": "cheyenne.newton@student.tdsb.on.ca",
      "First Name": "Cheyenne",
      "Last Name": "Newton",
      "Grade": 9,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "We Will Rise Again",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Drawing",
      "The theme of your art (choose all that apply)": "Fiction",
      "Style (choose all that apply)": "Figurative Art",
      "Medium (choose all that apply)": "Pencil",
      "Subject (choose all that apply)": "Narrative",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "When the World Falls Into the Flames, We Will Rise Again",
      "Please upload your art here.": "https://drive.google.com/uc?id=1JerA_CpKaLk-7jIFYkFReaQpFswweds3"
    },
    {
      "Timestamp": "5/26/2020 12:24:38",
      "Email Address": "cheyenne.newton@student.tdsb.on.ca",
      "First Name": "Cheyenne",
      "Last Name": "Newton",
      "Grade": 9,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "Broken and Hated",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Drawing",
      "The theme of your art (choose all that apply)": "Fiction",
      "Style (choose all that apply)": "Fine Art",
      "Medium (choose all that apply)": "Digital",
      "Subject (choose all that apply)": "Narrative",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "You're the ones who Broke me",
      "Please upload your art here.": "https://drive.google.com/uc?id=1UInH3HIyKvlqjTiXeSivgrc-AR0iCY4j"
    },
    {
      "Timestamp": "5/19/2020 17:18:24",
      "Email Address": "deryk.jackson@tdsb.on.ca",
      "First Name": "Deryk",
      "Last Name": "Jackson",
      "Grade": "Staff",
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "I am staff",
      "Name of your piece of artwork": "Yearbook Graduate Section Divider",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "Our goal in section dividers for yearbook was to capture places that our students would know and fit our theme of 'Neighbourhood'",
      "Category": "Photography",
      "The theme of your art (choose all that apply)": "Community",
      "Style (choose all that apply)": "Photography",
      "Medium (choose all that apply)": "Digital Photography",
      "Subject (choose all that apply)": "Architecture, Landscape",
      "What is the orientation of your art?": "Horizontal",
      "Please enter the exact name of your artwork, including the extension:": "Jackson--Grad Section Divider Yearbook 2019-20",
      "Please upload your art here.": "https://drive.google.com/uc?id=1clRqoo-pXCgPXssWd5pntIFRxAyfSjJM"
    },
    {
      "Timestamp": "5/19/2020 17:26:32",
      "Email Address": "deryk.jackson@tdsb.on.ca",
      "First Name": "Deryk",
      "Last Name": "Jackson",
      "Grade": "Staff",
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "I am staff",
      "Name of your piece of artwork": "Scarborough Bluffs--Athletics Section Divider Yearbook 2019-20",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Photography",
      "The theme of your art (choose all that apply)": "Community",
      "Style (choose all that apply)": "Photography",
      "Medium (choose all that apply)": "Digital Photography",
      "Subject (choose all that apply)": "Landscape, Nature",
      "What is the orientation of your art?": "Horizontal",
      "Please enter the exact name of your artwork, including the extension:": "Scarborough Bluffs--Athletics Section Divider Yearbook 2019-20",
      "Please upload your art here.": "https://drive.google.com/uc?id=1gWEIOhNNUVSwJqZNpGR8jRP-fZ2AOyaT"
    },
    {
      "Timestamp": "5/19/2020 17:28:47",
      "Email Address": "deryk.jackson@tdsb.on.ca",
      "First Name": "Deryk",
      "Last Name": "Jackson",
      "Grade": "Staff",
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "I am staff",
      "Name of your piece of artwork": "Lia",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "I'm no artist but this is my daughter from your Grade 6 graduation.",
      "Category": "Painting",
      "The theme of your art (choose all that apply)": "Values (love, freedom...)",
      "Style (choose all that apply)": "Pop Art",
      "Medium (choose all that apply)": "Acrylic",
      "Subject (choose all that apply)": "Portrait",
      "What is the orientation of your art?": "Horizontal",
      "Please enter the exact name of your artwork, including the extension:": "Lia.jpg",
      "Please upload your art here.": "https://drive.google.com/uc?id=1h2M1KmsmuJadfUefI4hvlakR1ZMPckvm"
    },
    {
      "Timestamp": "5/28/2020 11:01:14",
      "Email Address": "eileen.walsh@student.tdsb.on.ca",
      "First Name": "Eileen",
      "Last Name": "Walsh",
      "Grade": 10,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "Lilac tree buds",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Drawing",
      "The theme of your art (choose all that apply)": "Culture",
      "Style (choose all that apply)": "Fine Art, Realism",
      "Medium (choose all that apply)": "Pencil, Pencil crayons",
      "Subject (choose all that apply)": "Nature",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "Lilac tree buds",
      "Please upload your art here.": "https://drive.google.com/uc?id=1tdgWwvRnMfMPIdlaFjEYLZuW9mlGgLUj"
    },
    {
      "Timestamp": "5/28/2020 11:05:04",
      "Email Address": "eileen.walsh@student.tdsb.on.ca",
      "First Name": "Eileen",
      "Last Name": "Walsh",
      "Grade": 10,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "Shattered Whale",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Painting",
      "The theme of your art (choose all that apply)": "Culture",
      "Style (choose all that apply)": "Abstract",
      "Medium (choose all that apply)": "Acrylic",
      "Subject (choose all that apply)": "Animal, Nature",
      "What is the orientation of your art?": "Horizontal",
      "Please enter the exact name of your artwork, including the extension:": "Shattered Whale",
      "Please upload your art here.": "https://drive.google.com/uc?id=1R1PqPOZhyAVdIKBvTLF3ERjDvRrzF1l8"
    },
    {
      "Timestamp": "5/22/2020 10:07:40",
      "Email Address": "elodie.bregere@student.tdsb.on.ca",
      "First Name": "Elodie",
      "Last Name": "Bregere",
      "Grade": 11,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "I have never taken a visual arts course at Danforth or Greenwood",
      "Name of your piece of artwork": "Technology and Mental Health: Hand and Hand",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "The poster provides an in depth explanation as to how  technology has been and could be used to help promote mental health. An overall educational poster",
      "Category": "Drawing",
      "The theme of your art (choose all that apply)": "Community, Social Issues, Values (love, freedom...)",
      "Style (choose all that apply)": "Poster",
      "Medium (choose all that apply)": "Digital",
      "Subject (choose all that apply)": "Narrative",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "Mental Health and Technology: Hand and Hand",
      "Please upload your art here.": "https://drive.google.com/uc?id=1MjgeO2WGfo6ugztcHGywMVJ72RYoGvsj"
    },
    {
      "Timestamp": "5/22/2020 10:11:54",
      "Email Address": "elodie.bregere@student.tdsb.on.ca",
      "First Name": "Elodie",
      "Last Name": "Bregere",
      "Grade": 11,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "I have never taken a visual arts course at Danforth or Greenwood",
      "Name of your piece of artwork": "The mind",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Drawing",
      "The theme of your art (choose all that apply)": "Fiction, Values (love, freedom...)",
      "Style (choose all that apply)": "Modern, Pop Art",
      "Medium (choose all that apply)": "Digital",
      "Subject (choose all that apply)": "Narrative",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "The mind",
      "Please upload your art here.": "https://drive.google.com/uc?id=1YcsG3rDNudZNJynp0-BuLhrWgA54-jKp"
    },
    {
      "Timestamp": "5/21/2020 19:01:36",
      "Email Address": "evan.walmsley@student.tdsb.on.ca",
      "First Name": "Evan",
      "Last Name": "Walmsley",
      "Grade": 10,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "Trapped",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "Although this photo was taken back in the fall, I feel like it is still very relevant in these times. Being TRAPPED at home, isolated from society, is making me go a little mad.",
      "Category": "Photography",
      "The theme of your art (choose all that apply)": "Social Issues",
      "Style (choose all that apply)": "Abstract",
      "Medium (choose all that apply)": "Ink, It's a photo",
      "Subject (choose all that apply)": "Self-Portrait",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "Trapped",
      "Please upload your art here.": "https://drive.google.com/uc?id=1B23TVUoC-wjoxiZBy5IIJ-LQX8xeX7M3"
    },
    {
      "Timestamp": "5/21/2020 22:34:07",
      "Email Address": "furqan.mohammed3@student.tdsb.on.ca",
      "First Name": "Furqan Ahmed",
      "Last Name": "Mohammed",
      "Grade": 9,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Mr. Tsang",
      "Name of your piece of artwork": "Anime",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "I draw anime and was inspired by the Japanese Tv shoes",
      "Category": "Drawing",
      "The theme of your art (choose all that apply)": "Fiction, Values (love, freedom...)",
      "Style (choose all that apply)": "Fine Art, Pop Art",
      "Medium (choose all that apply)": "Ink, Pencil, Markers",
      "Subject (choose all that apply)": "Portrait",
      "What is the orientation of your art?": "Horizontal",
      "Please enter the exact name of your artwork, including the extension:": "Anime",
      "Please upload your art here.": "https://drive.google.com/uc?id=1t3COEWPH11uJaKNzIVYU4JPJiTjNyP_A"
    },
    {
      "Timestamp": "5/26/2020 14:43:17",
      "Email Address": "jannatul.afifa@student.tdsb.on.ca",
      "First Name": "Jannatul",
      "Last Name": "Afifa",
      "Grade": 12,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "Forgotten Playground",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "Following Rousseau's distinct style, this piece features a playground in the middle of an overgrown garden. The meaning it is up for personal interpretation, but I like to fancy that it means the loss of childhood innocence in the dense foliage of adulthood.",
      "Category": "Drawing, Painting",
      "The theme of your art (choose all that apply)": "Values (love, freedom...)",
      "Style (choose all that apply)": "Fine Art",
      "Medium (choose all that apply)": "Acrylic",
      "Subject (choose all that apply)": "Nature",
      "What is the orientation of your art?": "Horizontal",
      "Please enter the exact name of your artwork, including the extension:": "Forgotten Playground",
      "Please upload your art here.": "https://drive.google.com/uc?id=1o28FBXTmvhVims56u6reeF2eR08ATpFm"
    },
    {
      "Timestamp": "5/26/2020 14:47:36",
      "Email Address": "jannatul.afifa@student.tdsb.on.ca",
      "First Name": "Jannatul",
      "Last Name": "Afifa",
      "Grade": 12,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "Vaguely Lonely",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "A view of the fountain in front of the restaurants on the Danforth. Again, interpretation is up to the viewer, but think of that feeling one sometimes gets; of feeling completely alone in the middle of a busy street.",
      "Category": "Drawing, Painting",
      "The theme of your art (choose all that apply)": "Social Issues",
      "Style (choose all that apply)": "Realism",
      "Medium (choose all that apply)": "Acrylic",
      "Subject (choose all that apply)": "Landscape",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "Vaguely Lonely",
      "Please upload your art here.": "https://drive.google.com/uc?id=1YMiNNSbqLkleyLVQsiZUYxlRMLk13epf"
    },
    {
      "Timestamp": "5/26/2020 17:20:30",
      "Email Address": "jannatul.afifa@student.tdsb.on.ca",
      "First Name": "Jannatul",
      "Last Name": "Afifa",
      "Grade": 12,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "Reflection",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "A study of glass, lighting and drapery.",
      "Category": "Drawing, Painting",
      "The theme of your art (choose all that apply)": "Values (love, freedom...)",
      "Style (choose all that apply)": "Realism",
      "Medium (choose all that apply)": "Acrylic",
      "Subject (choose all that apply)": "Still Life",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "Reflection",
      "Please upload your art here.": "https://drive.google.com/uc?id=1aOTrbbjVeTa7fvPpWlprKHr3Anjx0h_3"
    },
    {
      "Timestamp": "5/26/2020 17:27:08",
      "Email Address": "jannatul.afifa@student.tdsb.on.ca",
      "First Name": "Jannatul",
      "Last Name": "Afifa",
      "Grade": 12,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "Orange",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "A still life of a clay pumpkin, featuring a grade 12 law textbook in the background.",
      "Category": "Drawing, Painting",
      "The theme of your art (choose all that apply)": "Culture",
      "Style (choose all that apply)": "Realism",
      "Medium (choose all that apply)": "Acrylic",
      "Subject (choose all that apply)": "Still Life",
      "What is the orientation of your art?": "Horizontal",
      "Please enter the exact name of your artwork, including the extension:": "Orange",
      "Please upload your art here.": "https://drive.google.com/uc?id=1SOP30rUCKvpdLGJT3QH6BpkDM-ELaAON"
    },
    {
      "Timestamp": "5/26/2020 17:30:40",
      "Email Address": "jannatul.afifa@student.tdsb.on.ca",
      "First Name": "Jannatul",
      "Last Name": "Afifa",
      "Grade": 12,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "Light Showers",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "A view from the Toronto zoo; the beauty as ephemeral as the the rain clouds that day.",
      "Category": "Drawing, Painting",
      "The theme of your art (choose all that apply)": "Values (love, freedom...)",
      "Style (choose all that apply)": "Realism",
      "Medium (choose all that apply)": "Watercolor",
      "Subject (choose all that apply)": "Landscape",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "Light Showers",
      "Please upload your art here.": "https://drive.google.com/uc?id=1pmEE3SSNkc87r4J6ZaUo4xJ3QfrEUDyf"
    },
    {
      "Timestamp": "5/24/2020 19:24:05",
      "Email Address": "jessica.burke-hall@student.tdsb.on.ca",
      "First Name": "Jessica",
      "Last Name": "Burke-Hall",
      "Grade": 9,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Mr. Tsang",
      "Name of your piece of artwork": "Don't be koi with me",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Painting",
      "The theme of your art (choose all that apply)": "Values (love, freedom...)",
      "Style (choose all that apply)": "Traditional",
      "Medium (choose all that apply)": "Ink, Watercolor",
      "Subject (choose all that apply)": "Animal, Nature",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "koi painting Jessica B-H.jpg",
      "Please upload your art here.": "https://drive.google.com/uc?id=13Gyi8wMjcDjItWjNoHSEOn11jPgf7Arz"
    },
    {
      "Timestamp": "5/24/2020 19:28:11",
      "Email Address": "jessica.burke-hall@student.tdsb.on.ca",
      "First Name": "Jessica",
      "Last Name": "Burke-Hall",
      "Grade": 9,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Mr. Tsang",
      "Name of your piece of artwork": "Frogs&Mushrooms",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Painting",
      "The theme of your art (choose all that apply)": "Fiction",
      "Style (choose all that apply)": "Pop Art",
      "Medium (choose all that apply)": "Ink, Watercolor",
      "Subject (choose all that apply)": "Animal, Nature",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "FrogsAndMushrooms.jpg",
      "Please upload your art here.": "https://drive.google.com/uc?id=1aDizEGCeW8eNWZeBPyMr9vUUpT7llfkJ"
    },
    {
      "Timestamp": "5/27/2020 17:06:51",
      "Email Address": "johnjacob.tolentino@student.tdsb.on.ca",
      "First Name": "John Jacob",
      "Last Name": "Tolentino",
      "Grade": 12,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "The Painted Stones",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "These are stones I collected from Woodbine Beach and I painted them to remember Covid-19",
      "Category": "Drawing",
      "The theme of your art (choose all that apply)": "Values (love, freedom...)",
      "Style (choose all that apply)": "Realism",
      "Medium (choose all that apply)": "Pencil",
      "Subject (choose all that apply)": "Nature",
      "What is the orientation of your art?": "Horizontal",
      "Please enter the exact name of your artwork, including the extension:": "painted stones.jpeg",
      "Please upload your art here.": "https://drive.google.com/uc?id=1nU9Asc-ozhegqzfoH7GwRBpFFMHsdrDj"
    },
    {
      "Timestamp": "5/25/2020 19:15:57",
      "Email Address": "keeford.cross@student.tdsb.on.ca",
      "First Name": "Keeford",
      "Last Name": "Cross",
      "Grade": 11,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "A Dream (Sister Moon)",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Drawing, Painting",
      "The theme of your art (choose all that apply)": "Values (love, freedom...)",
      "Style (choose all that apply)": "Abstract, Modern, Realism",
      "Medium (choose all that apply)": "Watercolor, Alcohol marker",
      "Subject (choose all that apply)": "Nature",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "Keeford-Cross-A Dream (Sister Moon)",
      "Please upload your art here.": "https://drive.google.com/uc?id=1sd9qrTOeFJeuspKxYkkiDmWQ897Njmk_"
    },
    {
      "Timestamp": "5/22/2020 11:04:51",
      "Email Address": "lanie.chen@student.tdsb.on.ca",
      "First Name": "Lanie",
      "Last Name": "Chen",
      "Grade": 12,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "My Cat Asleep",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Drawing",
      "The theme of your art (choose all that apply)": "Values (love, freedom...)",
      "Style (choose all that apply)": "Figurative Art",
      "Medium (choose all that apply)": "Pencil, Markers",
      "Subject (choose all that apply)": "Animal",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "Lanie-Chen-My Cat Asleep.jpg",
      "Please upload your art here.": "https://drive.google.com/uc?id=1Wk3HT1aGHkJCJC8s2JKjipkZ73TDgmkb"
    },
    {
      "Timestamp": "5/27/2020 17:03:41",
      "Email Address": "lanie.chen@student.tdsb.on.ca",
      "First Name": "Lanie",
      "Last Name": "Chen",
      "Grade": 12,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "Artwork Desk",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Drawing",
      "The theme of your art (choose all that apply)": "Values (love, freedom...)",
      "Style (choose all that apply)": "Realism",
      "Medium (choose all that apply)": "Pencil",
      "Subject (choose all that apply)": "Architecture, Still Life",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "Lanie-Chen-Artwork Desk.jpg",
      "Please upload your art here.": "https://drive.google.com/uc?id=1Af71G5qZAnEfSOJU821_tfueFdrlcp9O"
    },
    {
      "Timestamp": "5/20/2020 16:13:41",
      "Email Address": "lulu.gzowski@student.tdsb.on.ca",
      "First Name": "Lulu",
      "Last Name": "Gzowski",
      "Grade": 11,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "I am not taking art this year, but have taken it another year in high school",
      "Name of your piece of artwork": "Evisandra",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Drawing, Digital Art",
      "The theme of your art (choose all that apply)": "Fiction",
      "Style (choose all that apply)": "Figurative Art",
      "Medium (choose all that apply)": "Digital",
      "Subject (choose all that apply)": "Portrait",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "Lulu-Gzowski-Evisandra.jpg",
      "Please upload your art here.": "https://drive.google.com/uc?id=1n2lcGjKnshEqIOEZQPISRlU9era8mrro"
    },
    {
      "Timestamp": "5/21/2020 10:25:59",
      "Email Address": "masrura.ahmed@student.tdsb.on.ca",
      "First Name": "Masrura",
      "Last Name": "Ahmed",
      "Grade": 10,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Neub",
      "Name of your piece of artwork": "Blinding Lights",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Digital painting",
      "The theme of your art (choose all that apply)": "Fiction",
      "Style (choose all that apply)": "Figurative Art, Portraiture Art",
      "Medium (choose all that apply)": "Digital",
      "Subject (choose all that apply)": "Portrait",
      "What is the orientation of your art?": "Horizontal",
      "Please enter the exact name of your artwork, including the extension:": "Masrura-Ahmed-Blinding Lights",
      "Please upload your art here.": "https://drive.google.com/uc?id=1IjlMp6pBBsQ6jxXb_EoQVYYi5Vf1Mdr_"
    },
    {
      "Timestamp": "5/21/2020 10:53:21",
      "Email Address": "masrura.ahmed@student.tdsb.on.ca",
      "First Name": "Masrura",
      "Last Name": "Ahmed",
      "Grade": 10,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Neub",
      "Name of your piece of artwork": "Tae et Tanie",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "I wanted to portray one of my favourite famous pets because who doesn't love dogs? The art was inspired by the puppy of V from bts.",
      "Category": "Digital painting",
      "The theme of your art (choose all that apply)": "Fiction",
      "Style (choose all that apply)": "Figurative Art, Portraiture Art",
      "Medium (choose all that apply)": "Digital",
      "Subject (choose all that apply)": "Animal, Portrait",
      "What is the orientation of your art?": "Horizontal",
      "Please enter the exact name of your artwork, including the extension:": "Masrura-Ahmed-Tae et Tanie",
      "Please upload your art here.": "https://drive.google.com/uc?id=13TdBgEKvz0JwWoivUN7cll-KyOjo0IT4"
    },
    {
      "Timestamp": "5/21/2020 11:05:02",
      "Email Address": "masrura.ahmed@student.tdsb.on.ca",
      "First Name": "Masrura",
      "Last Name": "Ahmed",
      "Grade": 10,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Neub",
      "Name of your piece of artwork": "Tae et Tanie",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "I wanted to portray one of my favourite famous pets because who doesn't love dogs? The art was inspired by the puppy of V from bts.",
      "Category": "Digital painting",
      "The theme of your art (choose all that apply)": "Fiction",
      "Style (choose all that apply)": "Figurative Art, Portraiture Art",
      "Medium (choose all that apply)": "Digital",
      "Subject (choose all that apply)": "Animal, Portrait",
      "What is the orientation of your art?": "Horizontal",
      "Please enter the exact name of your artwork, including the extension:": "Masrura-Ahmed-Tae et Tanie",
      "Please upload your art here.": "https://drive.google.com/uc?id=1M03p50_sPUhdvxHEs27_A0dFOBBZe967"
    },
    {
      "Timestamp": "5/21/2020 11:14:04",
      "Email Address": "masrura.ahmed@student.tdsb.on.ca",
      "First Name": "Masrura",
      "Last Name": "Ahmed",
      "Grade": 10,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Neub",
      "Name of your piece of artwork": "Tear",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "People are not able to fully show their flaws in public due to fear of being hated. This was inspired by a scene from the music video 'Singularity' and the mask represents the mask each person wears in public to hide their flaws. The tear represents the sadness that comes from not having the courage to fully express oneself.",
      "Category": "Digital Painting",
      "The theme of your art (choose all that apply)": "Fiction, Social Issues",
      "Style (choose all that apply)": "Portraiture Art, Surrealism Art",
      "Medium (choose all that apply)": "Digital",
      "Subject (choose all that apply)": "Narrative, Portrait",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "Masrura-Ahmed-Tear",
      "Please upload your art here.": "https://drive.google.com/uc?id=1qCjJPgZx60kkqEhEZmmruoIBnMDdYlsY"
    },
    {
      "Timestamp": "5/28/2020 21:01:28",
      "Email Address": "megan.vanaarde@student.tdsb.on.ca",
      "First Name": "Megan",
      "Last Name": "Van Aarde",
      "Grade": 10,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "The Bard of Avon",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Painting",
      "The theme of your art (choose all that apply)": "Culture",
      "Style (choose all that apply)": "Portraiture Art",
      "Medium (choose all that apply)": "Acrylic",
      "Subject (choose all that apply)": "Portrait",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "Megan van Aarde- The Bard of Avon",
      "Please upload your art here.": "https://drive.google.com/uc?id=1De1W2pT8Lh0f1ifJ-t6Na_mO-Z2D02ou"
    },
    {
      "Timestamp": "5/28/2020 21:05:24",
      "Email Address": "megan.vanaarde@student.tdsb.on.ca",
      "First Name": "Megan",
      "Last Name": "Van Aarde",
      "Grade": 10,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "Liquid lifeline",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Photography",
      "The theme of your art (choose all that apply)": "Social Issues",
      "Style (choose all that apply)": "Photography",
      "Medium (choose all that apply)": "Digital Photography",
      "Subject (choose all that apply)": "Still Life",
      "What is the orientation of your art?": "Horizontal",
      "Please enter the exact name of your artwork, including the extension:": "Megan van Aarde- Liquid lifeline",
      "Please upload your art here.": "https://drive.google.com/uc?id=1v5NCDmb-fSxFMMK5dftll6FuQM1NiuW_"
    },
    {
      "Timestamp": "5/28/2020 15:00:25",
      "Email Address": "michelle.sin@student.tdsb.on.ca",
      "First Name": "Michelle",
      "Last Name": "Sin",
      "Grade": 12,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "nEmerald Carrot",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Painting",
      "The theme of your art (choose all that apply)": "Values (love, freedom...)",
      "Style (choose all that apply)": "Realism",
      "Medium (choose all that apply)": "Acrylic",
      "Subject (choose all that apply)": "Animal, Portrait",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "Michelle-Sin-nEmerald Carrot.jpg",
      "Please upload your art here.": "https://drive.google.com/uc?id=1HI0jAEptTbV-bhZF2bjFwZEf14gOqlGM"
    },
    {
      "Timestamp": "5/28/2020 20:38:43",
      "Email Address": "nadia.ghirmay@student.tdsb.on.ca",
      "First Name": "Nadia",
      "Last Name": "Ghirmay",
      "Grade": 9,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "Dicey Flames",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Drawing",
      "The theme of your art (choose all that apply)": "Values (love, freedom...)",
      "Style (choose all that apply)": "Street Art, Surrealism Art",
      "Medium (choose all that apply)": "Pencil, Coloured pencils",
      "Subject (choose all that apply)": "Still Life",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "Nadia-Ghirmay-Dicey Flames",
      "Please upload your art here.": "https://drive.google.com/uc?id=1_PD5THTDj8QdlK1E3jSUBn-EjFpbK69U"
    },
    {
      "Timestamp": "5/28/2020 19:43:23",
      "Email Address": "nadia.ghirmay@student.tdsb.on.ca",
      "First Name": "Nadia",
      "Last Name": "Ghirmay",
      "Grade": 9,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "Nipsey Hussle Memorial",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Drawing",
      "The theme of your art (choose all that apply)": "Culture, Values (love, freedom...)",
      "Style (choose all that apply)": "Portraiture Art, Realism",
      "Medium (choose all that apply)": "Charcoal, Pencil",
      "Subject (choose all that apply)": "Portrait, Still Life",
      "What is the orientation of your art?": "Horizontal",
      "Please enter the exact name of your artwork, including the extension:": "Nadia-Ghirmay-Nipsey Hussle Memorial",
      "Please upload your art here.": "https://drive.google.com/uc?id=1dZnt4IqKiZ3PLUZf9Jk7579mr71U2QOe"
    },
    {
      "Timestamp": "5/28/2020 20:16:45",
      "Email Address": "paul.weight@tdsb.on.ca",
      "First Name": "Paul",
      "Last Name": "Weight",
      "Grade": "Staff",
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "I am staff",
      "Name of your piece of artwork": "All it Takes is Time",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Photography",
      "The theme of your art (choose all that apply)": "Community",
      "Style (choose all that apply)": "Photography",
      "Medium (choose all that apply)": "Digital Photography",
      "Subject (choose all that apply)": "Landscape",
      "What is the orientation of your art?": "Horizontal",
      "Please enter the exact name of your artwork, including the extension:": "Paul-Weight-All it Takes is Time.jpg",
      "Please upload your art here.": "https://drive.google.com/uc?id=1lKD6r8d_mRhLdt3yHQKfG9F70rGEuBbh"
    },
    {
      "Timestamp": "5/25/2020 22:00:51",
      "Email Address": "rose.samaroo@tdsb.on.ca",
      "First Name": "Rose",
      "Last Name": "Samaroo",
      "Grade": "Staff",
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "I am staff",
      "Name of your piece of artwork": "Moonlight Gazing",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "Nature, from as small as a flower to as large as the universe, has been an inspiration for my paintings.  I use an acrylic medium to capture the outdoors in my canvas so that others can appreciate how beautiful and fragile our planet truly is.",
      "Category": "Painting",
      "The theme of your art (choose all that apply)": "Values (love, freedom...)",
      "Style (choose all that apply)": "Realism",
      "Medium (choose all that apply)": "Acrylic",
      "Subject (choose all that apply)": "Landscape, Nature",
      "What is the orientation of your art?": "Horizontal",
      "Please enter the exact name of your artwork, including the extension:": "Rose-Samaroo-Moonlight Gazing",
      "Please upload your art here.": "https://drive.google.com/uc?id=1X8rKGw1p3TGCZ-gwUy90fwbq6hAHCKXi"
    },
    {
      "Timestamp": "5/28/2020 18:19:52",
      "Email Address": "sayani.roy@student.tdsb.on.ca",
      "First Name": "Sayani",
      "Last Name": "Roy",
      "Grade": 10,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "Sayani Roy",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Photography",
      "The theme of your art (choose all that apply)": "Community",
      "Style (choose all that apply)": "Photography",
      "Medium (choose all that apply)": "Digital Photography",
      "Subject (choose all that apply)": "Landscape, Nature",
      "What is the orientation of your art?": "Horizontal",
      "Please enter the exact name of your artwork, including the extension:": "Summer Sunset",
      "Please upload your art here.": "https://drive.google.com/uc?id=1rzmbuuTEqnFPOcuO7cbgPjsFpXg03vhJ"
    },
    {
      "Timestamp": "5/20/2020 17:32:53",
      "Email Address": "sunehra.mehrun@student.tdsb.on.ca",
      "First Name": "Sunehra",
      "Last Name": "Mehrun",
      "Grade": 11,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "I am not taking art this year, but have taken it another year in high school",
      "Name of your piece of artwork": "seasonal change",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Painting",
      "The theme of your art (choose all that apply)": "Values (love, freedom...)",
      "Style (choose all that apply)": "Folk Art",
      "Medium (choose all that apply)": "Watercolor",
      "Subject (choose all that apply)": "Landscape, Nature",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "Sunehra-Mehrun-Seasonal-Change",
      "Please upload your art here.": "https://drive.google.com/uc?id=1HrDQ6TRVnWr7riaSp1vlhr_d1gF1wK5E"
    },
    {
      "Timestamp": "5/25/2020 16:18:04",
      "Email Address": "tasneem.ahmed2@student.tdsb.on.ca",
      "First Name": "Tasneem",
      "Last Name": "Ahmed",
      "Grade": 11,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "uc Art Room",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "I miss the bright sunny days, where I could work on an art piece, with the sun beaming into the large room, in Mrs. Jokinens art class :(",
      "Category": "Digital Painting",
      "The theme of your art (choose all that apply)": "Community",
      "Style (choose all that apply)": "Realism",
      "Medium (choose all that apply)": "Digital",
      "Subject (choose all that apply)": "Narrative",
      "What is the orientation of your art?": "Horizontal",
      "Please enter the exact name of your artwork, including the extension:": "Art room 1 point.png",
      "Please upload your art here.": "https://drive.google.com/uc?id=1qY1v6Qn7i4QaEbWZrPwX9E6ksNO6qcSX"
    },
    {
      "Timestamp": "5/28/2020 14:35:10",
      "Email Address": "veronica.luo@student.tdsb.on.ca",
      "First Name": "Veronica",
      "Last Name": "Luo",
      "Grade": 10,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "I am not taking art this year, but have taken it another year in high school",
      "Name of your piece of artwork": "Interconnected",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "Although we may be apart in the current moment, we will always stay connected. This is what my art piece aims to convey. Like the petals of a flower, we are (and always will be) together in some way - even when we are apart. Everything is interconnected - so no amount of distance will ever break our connection to each other and the world around us.",
      "Category": "Other",
      "The theme of your art (choose all that apply)": "Community, Values (love, freedom...)",
      "Style (choose all that apply)": "Recycled Art",
      "Medium (choose all that apply)": "Cardboard",
      "Subject (choose all that apply)": "Still Life",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "Veronica-Luo-Interconnected",
      "Please upload your art here.": "https://drive.google.com/uc?id=1Huqby4P9BGTP-M5-4AqktVpxF2deCJ_v"
    },
    {
      "Timestamp": "5/28/2020 18:37:43",
      "Email Address": "veronica.luo@student.tdsb.on.ca",
      "First Name": "Veronica",
      "Last Name": "Luo",
      "Grade": 10,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "I am not taking art this year, but have taken it another year in high school",
      "Name of your piece of artwork": "Outside of the Box",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "“Think outside of the box” is a phrase we hear quite often. But how often do we actually do this? My piece aims to encourage others to think outside of the box more often - and not be afraid to share their unique ideas. If you can’t change what’s inside of a box, then change what’s outside of it. Because by doing so, you will eventually be able to change the box itself entirely - inside and out.",
      "Category": "Other",
      "The theme of your art (choose all that apply)": "Values (love, freedom...)",
      "Style (choose all that apply)": "Origami",
      "Medium (choose all that apply)": "Origami",
      "Subject (choose all that apply)": "Still Life",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "Veronica-Luo-Outside of the Box",
      "Please upload your art here.": "https://drive.google.com/uc?id=1_wm4q6tjOtFXc079yWcTFl9yeq2dhBpn"
    },
    {
      "Timestamp": "5/28/2020 19:05:49",
      "Email Address": "veronica.luo@student.tdsb.on.ca",
      "First Name": "Veronica",
      "Last Name": "Luo",
      "Grade": 10,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "I am not taking art this year, but have taken it another year in high school",
      "Name of your piece of artwork": "Unique",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "We are all different - with our own unique characteristics. This is what my art piece aims to convey. Like each and every colour, line and small detail in an art piece, we are all unique - and together, we form one spectacular masterpiece. Every detail in an art piece plays an important role - just like how every person has their own unique talents and is capable of making a big difference in the world. So, we should embrace ourselves and never be afraid to show the world who we truly are.",
      "Category": "Other",
      "The theme of your art (choose all that apply)": "Community, Values (love, freedom...)",
      "Style (choose all that apply)": "Scratch Art",
      "Medium (choose all that apply)": "Acrylic",
      "Subject (choose all that apply)": "Still Life",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "Veronica-Luo-Unique",
      "Please upload your art here.": "https://drive.google.com/uc?id=1-EdV4A_8dRxcIR0H-4TWHLNy45iulGKL"
    },
    {
      "Timestamp": "5/29/2020 12:18:08",
      "Email Address": "bella.semeniuk@student.tdsb.on.ca",
      "First Name": "Bella",
      "Last Name": "Semeniuk",
      "Grade": 10,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "Ordinary Object",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "No matter the place or time of day, there is always something to draw. By making art, peace can be found and ordinary objects can be enjoyed. So please, enjoy my ordinary object.",
      "Category": "Drawing",
      "The theme of your art (choose all that apply)": "Values (love, freedom...)",
      "Style (choose all that apply)": "Realism",
      "Medium (choose all that apply)": "Pastel",
      "Subject (choose all that apply)": "Still Life",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "Bella-Semeniuk-Ordinary Object.jpeg",
      "Please upload your art here.": "https://drive.google.com/uc?id=1rmQ6onixsD7duL2hzM5OjtWv_O4FhmIm"
    },
    {
      "Timestamp": "5/29/2020 13:06:29",
      "Email Address": "dhakshi.krishnalingam@student.tdsb.on.ca",
      "First Name": "Dhakshi",
      "Last Name": "Krishnalingam",
      "Grade": 10,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "The World In Motion",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Photography",
      "The theme of your art (choose all that apply)": "Social Issues",
      "Style (choose all that apply)": "Modern, Photography, Realism",
      "Medium (choose all that apply)": "Digital Photography",
      "Subject (choose all that apply)": "Landscape, Nature, Still Life",
      "What is the orientation of your art?": "Horizontal",
      "Please enter the exact name of your artwork, including the extension:": "Dhakshi-Kris-The World In Motion.jpg",
      "Please upload your art here.": "https://drive.google.com/uc?id=1-F5mXVP2KVRdyb5-afHT5KYLsqa8T_wr"
    },
    {
      "Timestamp": "5/29/2020 15:05:00",
      "Email Address": "stephanie.topp@tdsb.on.ca",
      "First Name": "Stephanie",
      "Last Name": "Topp",
      "Grade": "Staff",
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "I am staff",
      "Name of your piece of artwork": "Magical Sea creatures - an exploration.",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Drawing",
      "The theme of your art (choose all that apply)": "Fiction",
      "Style (choose all that apply)": "I'm not really an artist, so I'm not sure what I'd classify this as...doodle?",
      "Medium (choose all that apply)": "Ink, Pencil",
      "Subject (choose all that apply)": "Animal, Nature",
      "What is the orientation of your art?": "Horizontal",
      "Please enter the exact name of your artwork, including the extension:": "Magical Sea Creatures.jpg",
      "Please upload your art here.": "https://drive.google.com/uc?id=18hEgKVorHB4zfcv1SVmDuOcNNaClcbnY"
    },
    {
      "Timestamp": "5/29/2020 15:12:53",
      "Email Address": "om.dharamdasani@student.tdsb.on.ca",
      "First Name": "Om",
      "Last Name": "Dharamdasani",
      "Grade": 12,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "Babylon",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Digital Painting",
      "The theme of your art (choose all that apply)": "Community, Values",
      "Style (choose all that apply)": "Abstract",
      "Medium (choose all that apply)": "Digital",
      "Subject (choose all that apply)": "Narrative",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "Babylon",
      "Please upload your art here.": "https://drive.google.com/uc?id=1_qKrzksUt6vj3Pytx809iIWd83Oljkx1"
    },
    {
      "Timestamp": "5/29/2020 15:12:58",
      "Email Address": "stephanie.topp@tdsb.on.ca",
      "First Name": "Stephanie",
      "Last Name": "Topp",
      "Grade": "Staff",
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "I am staff",
      "Name of your piece of artwork": "Taking Flight",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "Stephanie Topp, amateur photographer: \"If you can find quiet and be quiet it in nature, really just be in the moment, it is amazing what you will see and learn.",
      "Category": "Photography",
      "The theme of your art (choose all that apply)": "Social Issues, Values",
      "Style (choose all that apply)": "Photography",
      "Medium (choose all that apply)": "Digital Photography",
      "Subject (choose all that apply)": "Animal, Nature",
      "What is the orientation of your art?": "Horizontal",
      "Please enter the exact name of your artwork, including the extension:": "Juvenile Yellow Warbler.jpg",
      "Please upload your art here.": "https://drive.google.com/uc?id=17HpH8TnN4WAuv5CBVLMISY_nf5gEF_rf"
    },
    {
      "Timestamp": "5/29/2020 15:20:12",
      "Email Address": "stephanie.topp@tdsb.on.ca",
      "First Name": "Stephanie",
      "Last Name": "Topp",
      "Grade": "Staff",
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "I am staff",
      "Name of your piece of artwork": "The Glass Frog: Cochranella resplendens (name in italics)",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Photography",
      "The theme of your art (choose all that apply)": "Social Issues, Values",
      "Style (choose all that apply)": "Photography",
      "Medium (choose all that apply)": "Digital Photography",
      "Subject (choose all that apply)": "Animal, Nature",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "Cochranella_resplendens_4.jpg",
      "Please upload your art here.": "https://drive.google.com/uc?id=1XynbdyRa9yJRJ4cNbt6cTTOxAG4pbS2O"
    },
    {
      "Timestamp": "5/29/2020 16:27:38",
      "Email Address": "jude.lammirato@student.tdsb.on.ca",
      "First Name": "Jude",
      "Last Name": "Lammirato",
      "Grade": 10,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "All hail the Monarch",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "After a combination of post-nuclear war radiation and thousands of years of royal family inbreeding, the kings of the various wasteland tribes are a strange site.",
      "Category": "Drawing",
      "The theme of your art (choose all that apply)": "Culture, Fiction",
      "Style (choose all that apply)": "Surrealism Art",
      "Medium (choose all that apply)": "Digital, Ink, Pencil",
      "Subject (choose all that apply)": "Narrative, Portrait",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "All Hail the Monarch",
      "Please upload your art here.": "https://drive.google.com/uc?id=1Mspa9Aqtvbg9mRAKE7UX6KMoGCVXXNJz"
    },
    {
      "Timestamp": "5/29/2020 16:31:23",
      "Email Address": "jude.lammirato@student.tdsb.on.ca",
      "First Name": "Jude",
      "Last Name": "Lammirato",
      "Grade": 10,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "Attack of the Fish-Men",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "A band of deep sea looters will emerge to the surface on missions to capture human women, and other female mammals to harvest their milk. Their current pray are the unsuspecting passengers of a top-class cruise ship that's been lost at sea.",
      "Category": "Drawing",
      "The theme of your art (choose all that apply)": "Fiction",
      "Style (choose all that apply)": "Surrealism Art",
      "Medium (choose all that apply)": "Digital, Ink, Pencil",
      "Subject (choose all that apply)": "Narrative",
      "What is the orientation of your art?": "Horizontal",
      "Please enter the exact name of your artwork, including the extension:": "Attack of the Fish-Men",
      "Please upload your art here.": "https://drive.google.com/uc?id=1XByew5AzgbJCelSF-PfRcNbprVcpEZUU"
    },
    {
      "Timestamp": "5/29/2020 16:35:14",
      "Email Address": "jude.lammirato@student.tdsb.on.ca",
      "First Name": "Jude",
      "Last Name": "Lammirato",
      "Grade": 10,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "Attack of the Fish-Men",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "A hidden species of deep sea looters will emerge to the surface on missions to capture human women to harvest their milk.",
      "Category": "Drawing",
      "The theme of your art (choose all that apply)": "Fiction",
      "Style (choose all that apply)": "Surrealism Art",
      "Medium (choose all that apply)": "Digital, Ink, Pencil",
      "Subject (choose all that apply)": "Narrative",
      "What is the orientation of your art?": "Horizontal",
      "Please enter the exact name of your artwork, including the extension:": "Attack of the Fish-Men",
      "Please upload your art here.": "https://drive.google.com/uc?id=189CjgXTvPwdf6mJuOcxnkb8eEsw6zB-e"
    },
    {
      "Timestamp": "5/29/2020 16:50:46",
      "Email Address": "keeford.cross@student.tdsb.on.ca",
      "First Name": "Keeford",
      "Last Name": "Cross",
      "Grade": 11,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "Narcissus",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Other",
      "The theme of your art (choose all that apply)": "Values",
      "Style (choose all that apply)": "Origami",
      "Medium (choose all that apply)": "Metal, Paper",
      "Subject (choose all that apply)": "Nature, Still Life",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "Keeford-Cross-Narcissus",
      "Please upload your art here.": "https://drive.google.com/uc?id=1FRCsnbuMjdYCSAfQ4Lor3q4SDB0GeQ7D"
    },
    {
      "Timestamp": "5/29/2020 17:01:09",
      "Email Address": "keeford.cross@student.tdsb.on.ca",
      "First Name": "Keeford",
      "Last Name": "Cross",
      "Grade": 11,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "Tribute to Marjane Satrapi (Persepolis)",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Other",
      "The theme of your art (choose all that apply)": "Culture, Social Issues, Values",
      "Style (choose all that apply)": "Abstract, Portraiture Art, Cartooning",
      "Medium (choose all that apply)": "Ink, Watercolor",
      "Subject (choose all that apply)": "Portrait",
      "What is the orientation of your art?": "Horizontal",
      "Please enter the exact name of your artwork, including the extension:": "Keeford-Cross-Tribute to Marjane Satrapi (Persepolis)",
      "Please upload your art here.": "https://drive.google.com/uc?id=15inhYY5aGkZX4I-6_HcI7XSK0lDDUcaN"
    },
    {
      "Timestamp": "5/29/2020 17:06:41",
      "Email Address": "keeford.cross@student.tdsb.on.ca",
      "First Name": "Keeford",
      "Last Name": "Cross",
      "Grade": 11,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "A Dream (Sister Moon)",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Drawing",
      "The theme of your art (choose all that apply)": "Values",
      "Style (choose all that apply)": "Abstract, Modern, Realism",
      "Medium (choose all that apply)": "Watercolor, Alcohol marker",
      "Subject (choose all that apply)": "Nature",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "Keeford-Cross-A Dream (Sister Moon)",
      "Please upload your art here.": "https://drive.google.com/uc?id=1LIbIS1fwLDch8VjPVeJyhaXHbCzuacWZ"
    },
    {
      "Timestamp": "5/29/2020 17:21:05",
      "Email Address": "shabornee.saha@student.tdsb.on.ca",
      "First Name": "Shabornee",
      "Last Name": "Saha",
      "Grade": 11,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "Ecstatic Vision",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Painting",
      "The theme of your art (choose all that apply)": "Fiction",
      "Style (choose all that apply)": "Abstract",
      "Medium (choose all that apply)": "Acrylic",
      "Subject (choose all that apply)": "Landscape, Nature",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "Ecstatic Vision.jpg",
      "Please upload your art here.": "https://drive.google.com/uc?id=1smKnpr-coSF_zX6BWvKRrV-ZD8gLf8N3"
    },
    {
      "Timestamp": "5/29/2020 17:46:25",
      "Email Address": "rahul.mazumder@student.tdsb.on.ca",
      "First Name": "Rahul",
      "Last Name": "Mazumder",
      "Grade": 11,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "Still Life Table",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Drawing",
      "The theme of your art (choose all that apply)": "Culture",
      "Style (choose all that apply)": "Figurative Art",
      "Medium (choose all that apply)": "Charcoal, Pencil",
      "Subject (choose all that apply)": "Still Life",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "Rahul-Mazumder-Still life table.jpg",
      "Please upload your art here.": "https://drive.google.com/uc?id=1O04o7wAv8mAMcPev0E3Qj9eDdWBcGn86"
    },
    {
      "Timestamp": "5/29/2020 18:34:54",
      "Email Address": "michelle.sin@student.tdsb.on.ca",
      "First Name": "Michelle",
      "Last Name": "Sin",
      "Grade": 12,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "Eat Your Veggies",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Painting",
      "The theme of your art (choose all that apply)": "Values",
      "Style (choose all that apply)": "Fine Art",
      "Medium (choose all that apply)": "Acrylic",
      "Subject (choose all that apply)": "Animal, Still Life",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "Michelle-Sin-Eat Your Veggies.jpg",
      "Please upload your art here.": "https://drive.google.com/uc?id=1lB0gPdNck9ShRg3zWO8t5dt7TkfMeZcZ"
    },
    {
      "Timestamp": "5/29/2020 18:36:48",
      "Email Address": "keeford.cross@student.tdsb.on.ca",
      "First Name": "Keeford",
      "Last Name": "Cross",
      "Grade": 11,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "La Pandémie (The Pandemic)",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "Keeford Cross: In French class, after reading the first volume of Marjane Satrapi’s Persepolis, we had to create a comic strip based on a significant event in our lifetime. With the pandemic raging, I figured that it would make the perfect subject matter.",
      "Category": "Drawing",
      "The theme of your art (choose all that apply)": "Culture, Community, Social Issues",
      "Style (choose all that apply)": "Cartooning",
      "Medium (choose all that apply)": "Ink",
      "Subject (choose all that apply)": "Narrative, Self-Portrait",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "Keeford-Cross-La Pandémie (The Pandemic)",
      "Please upload your art here.": "https://drive.google.com/uc?id=1DHsn-IvMoWjudh98PoSURTd5sPbnvjmv"
    },
    {
      "Timestamp": "5/29/2020 18:53:28",
      "Email Address": "michelle.sin@student.tdsb.on.ca",
      "First Name": "Michelle",
      "Last Name": "Sin",
      "Grade": 12,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "Hidden Pain",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Drawing",
      "The theme of your art (choose all that apply)": "Community, Social Issues",
      "Style (choose all that apply)": "Realism",
      "Medium (choose all that apply)": "Pencil",
      "Subject (choose all that apply)": "Portrait",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "Michelle-Sin-Hidden Pain.jpg",
      "Please upload your art here.": "https://drive.google.com/uc?id=1MeK0sKd0radtd2KG97yCipE4krDGWLXM"
    },
    {
      "Timestamp": "5/29/2020 18:59:18",
      "Email Address": "subah.zaman2@student.tdsb.on.ca",
      "First Name": "Subah",
      "Last Name": "Zaman",
      "Grade": 10,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "Harmony on a wire.",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Painting",
      "The theme of your art (choose all that apply)": "Community",
      "Style (choose all that apply)": "Fine Art",
      "Medium (choose all that apply)": "Acrylic",
      "Subject (choose all that apply)": "Animal, Nature",
      "What is the orientation of your art?": "Horizontal",
      "Please enter the exact name of your artwork, including the extension:": "Subah-Zaman-Harmony on a wire",
      "Please upload your art here.": "https://drive.google.com/uc?id=1za4eGdTj1NwMlcCM-EPN7hrmnwqovnui"
    },
    {
      "Timestamp": "5/29/2020 19:00:32",
      "Email Address": "adeeva.islam2@student.tdsb.on.ca",
      "First Name": "Adeeva",
      "Last Name": "Islam",
      "Grade": 11,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Mr. Wilson",
      "Name of your piece of artwork": "Starry night defined",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "Painting put a soul to ease. I tried to paint an eloquent starry night but turned out a bit different. The beauty of a masterpiece re-defined.",
      "Category": "Painting",
      "The theme of your art (choose all that apply)": "Culture",
      "Style (choose all that apply)": "Fine Art",
      "Medium (choose all that apply)": "Acrylic",
      "Subject (choose all that apply)": "Landscape",
      "What is the orientation of your art?": "Horizontal",
      "Please enter the exact name of your artwork, including the extension:": "Adeeva - Islam- Starry night re-defined",
      "Please upload your art here.": "https://drive.google.com/uc?id=1YSGrFVAhFL-ZAkoe9dquKAk-dEvJLWGa"
    },
    {
      "Timestamp": "5/29/2020 19:31:11",
      "Email Address": "mayesha.islam1@student.tdsb.on.ca",
      "First Name": "Mayesha",
      "Last Name": "Islam",
      "Grade": 11,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "Tuscany Countryside",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Painting",
      "The theme of your art (choose all that apply)": "",
      "Style (choose all that apply)": "Realism",
      "Medium (choose all that apply)": "Watercolor",
      "Subject (choose all that apply)": "Landscape, Nature",
      "What is the orientation of your art?": "Horizontal",
      "Please enter the exact name of your artwork, including the extension:": "Tuscany Countryside.jpg",
      "Please upload your art here.": "https://drive.google.com/uc?id=1uUHR7YHFpZJQGkEVVBUKAsJ5wRehpNwn"
    },
    {
      "Timestamp": "5/29/2020 19:41:16",
      "Email Address": "mayesha.islam1@student.tdsb.on.ca",
      "First Name": "Mayesha",
      "Last Name": "Islam",
      "Grade": 11,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "Autumn Road",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Painting",
      "The theme of your art (choose all that apply)": "Values",
      "Style (choose all that apply)": "Realism",
      "Medium (choose all that apply)": "Watercolor",
      "Subject (choose all that apply)": "Landscape, Nature",
      "What is the orientation of your art?": "Horizontal",
      "Please enter the exact name of your artwork, including the extension:": "Autumn Road.jpg",
      "Please upload your art here.": "https://drive.google.com/uc?id=1jOIcM4ZDnZpzdVhUhsit2TU9ZDY2szU2"
    },
    {
      "Timestamp": "5/29/2020 21:48:43",
      "Email Address": "keeford.cross@student.tdsb.on.ca",
      "First Name": "Keeford",
      "Last Name": "Cross",
      "Grade": 11,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "Morning Mountain",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Painting",
      "The theme of your art (choose all that apply)": "Culture, Values",
      "Style (choose all that apply)": "Abstract, Stylized, Simplified",
      "Medium (choose all that apply)": "Ink, Watercolor",
      "Subject (choose all that apply)": "Landscape, Nature",
      "What is the orientation of your art?": "Horizontal",
      "Please enter the exact name of your artwork, including the extension:": "Keeford-Cross-Morning Mountain",
      "Please upload your art here.": "https://drive.google.com/uc?id=1CxJLgOHP0wI129KUumCQiWMBSp-ndJiv"
    },
    {
      "Timestamp": "5/29/2020 23:52:06",
      "Email Address": "bella.semeniuk@student.tdsb.on.ca",
      "First Name": "Bella",
      "Last Name": "Semeniuk",
      "Grade": 10,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "Drawings from the Pandemic",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "I think it's important to have drawings to look back on to remember any period of time. These drawings will allow me to remember what life was like during the COVID-19 pandemic.",
      "Category": "Drawing",
      "The theme of your art (choose all that apply)": "Social Issues",
      "Style (choose all that apply)": "Figurative Art, Realism",
      "Medium (choose all that apply)": "Pastel",
      "Subject (choose all that apply)": "Still Life",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "Bella-Semeniuk-Drawings from the Pandemic.jpeg",
      "Please upload your art here.": "https://drive.google.com/uc?id=1B1vDFvFSlSD0swZACaF23JWazcVjoLq5"
    },
    {
      "Timestamp": "5/29/2020 23:57:39",
      "Email Address": "iain.donnelly@student.tdsb.on.ca",
      "First Name": "Iain",
      "Last Name": "Donnelly",
      "Grade": 11,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "I am not taking art this year, but have taken it another year in high school",
      "Name of your piece of artwork": "Aquatic Life of the Maritimes",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "A pen and ink rendition of the aquatic biodiversity in the waters of Atlantic Canada.",
      "Category": "Drawing",
      "The theme of your art (choose all that apply)": "Culture",
      "Style (choose all that apply)": "Realism, Realism with some artistic license",
      "Medium (choose all that apply)": "Ink, Pencil, Marker",
      "Subject (choose all that apply)": "Animal, Landscape, Nature",
      "What is the orientation of your art?": "Horizontal",
      "Please enter the exact name of your artwork, including the extension:": "iain-donnelly-maritime-life.JPG",
      "Please upload your art here.": "https://drive.google.com/uc?id=1gbpvTeQdCbmPO_4tOODY_340bZUMS2Ke"
    },
    {
      "Timestamp": "5/30/2020 0:02:48",
      "Email Address": "bella.semeniuk@student.tdsb.on.ca",
      "First Name": "Bella",
      "Last Name": "Semeniuk",
      "Grade": 10,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "Tiny House/Climbing Gym",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "This drawing is based on the tiny house/climbing gym I designed for my construction engineering class. Sadly, I don't have the resources to build it in real life, so I built it on paper instead.",
      "Category": "Drawing",
      "The theme of your art (choose all that apply)": "Fiction",
      "Style (choose all that apply)": "Fine Art",
      "Medium (choose all that apply)": "Ink",
      "Subject (choose all that apply)": "Architecture, Still Life",
      "What is the orientation of your art?": "Horizontal",
      "Please enter the exact name of your artwork, including the extension:": "Bella-Semeniuk-Tiny House/Climbing Gym.jpeg",
      "Please upload your art here.": "https://drive.google.com/uc?id=1juTVtqBKemO8Y4nUYPqTLv0eHia4tSb9"
    },
    {
      "Timestamp": "5/30/2020 16:45:52",
      "Email Address": "tunazzina.tasnim@student.tdsb.on.ca",
      "First Name": "Tunazzina",
      "Last Name": "Tasnim",
      "Grade": 9,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "Moonlight",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Painting",
      "The theme of your art (choose all that apply)": "Fiction, Values",
      "Style (choose all that apply)": "Fine Art, Surrealism Art",
      "Medium (choose all that apply)": "Pastel, Pencil",
      "Subject (choose all that apply)": "Nature, Still Life",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "Tunazzina-Tasnim-Moonlight",
      "Please upload your art here.": "https://drive.google.com/uc?id=1zt_os3-v-Uykm1nXPe2R2JuJ7YhtYEUb"
    },
    {
      "Timestamp": "5/30/2020 17:38:45",
      "Email Address": "hriday.dhakal@student.tdsb.on.ca",
      "First Name": "Hriday",
      "Last Name": "Dhakal",
      "Grade": 9,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Mr. Bryan",
      "Name of your piece of artwork": "Just an Ordinary Day",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Digital Painting",
      "The theme of your art (choose all that apply)": "Community, Fiction",
      "Style (choose all that apply)": "Photography",
      "Medium (choose all that apply)": "Digital Photography",
      "Subject (choose all that apply)": "Portrait",
      "What is the orientation of your art?": "Horizontal",
      "Please enter the exact name of your artwork, including the extension:": "Just an Ordinary Day",
      "Please upload your art here.": "https://drive.google.com/uc?id=1F8jt73xFqkzZ1gJXeHDXJ_QZR4DNqK3n"
    },
    {
      "Timestamp": "5/30/2020 21:56:21",
      "Email Address": "tunazzina.tasnim@student.tdsb.on.ca",
      "First Name": "Tunazzina",
      "Last Name": "Tasnim",
      "Grade": 9,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "Mellow Island",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Painting",
      "The theme of your art (choose all that apply)": "Culture, Fiction",
      "Style (choose all that apply)": "Figurative Art, Fine Art, Realism, Other",
      "Medium (choose all that apply)": "Pastel, Pencil",
      "Subject (choose all that apply)": "Landscape, Nature",
      "What is the orientation of your art?": "Horizontal",
      "Please enter the exact name of your artwork, including the extension:": "Tunazzina-Tasnim-Mellow Island",
      "Please upload your art here.": "https://drive.google.com/uc?id=19zQMFpGh6rC-xKiZY8q65deKNt5RYvLe"
    },
    {
      "Timestamp": "5/31/2020 15:17:17",
      "Email Address": "lanie.chen@student.tdsb.on.ca",
      "First Name": "Lanie",
      "Last Name": "Chen",
      "Grade": 12,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "Self portrait",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Drawing",
      "The theme of your art (choose all that apply)": "Culture, Values",
      "Style (choose all that apply)": "Portraiture Art",
      "Medium (choose all that apply)": "Pencil",
      "Subject (choose all that apply)": "Self-Portrait",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "Lanie-Chen-Self Portrait",
      "Please upload your art here.": "https://drive.google.com/uc?id=1RcsMebIbb_pVvYijcGWEf-ZzD_-8UbZZ"
    },
    {
      "Timestamp": "6/3/2020 21:13:10",
      "Email Address": "nashita.areeba@student.tdsb.on.ca",
      "First Name": "Nashita",
      "Last Name": "Areeba",
      "Grade": 10,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "hustle bustle",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Photography",
      "The theme of your art (choose all that apply)": "Culture, Community, Social Issues",
      "Style (choose all that apply)": "Photography, Realism, Other",
      "Medium (choose all that apply)": "Digital Photography",
      "Subject (choose all that apply)": "Landscape",
      "What is the orientation of your art?": "Horizontal",
      "Please enter the exact name of your artwork, including the extension:": "hustle bustle",
      "Please upload your art here.": "https://drive.google.com/open?id=1Ztm69XmRARpuW2WIPMblK3HI84MPYuIC"
    },
    {
      "Timestamp": "6/3/2020 21:21:29",
      "Email Address": "nashita.areeba@student.tdsb.on.ca",
      "First Name": "Nashita",
      "Last Name": "Areeba",
      "Grade": 10,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "Aurora",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Photography",
      "The theme of your art (choose all that apply)": "Culture, Fiction",
      "Style (choose all that apply)": "Photography",
      "Medium (choose all that apply)": "Digital Photography",
      "Subject (choose all that apply)": "Landscape, Still Life",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "Aurora",
      "Please upload your art here.": "https://drive.google.com/open?id=1XRzgSq0W6kiuTHoqYxbCC3ygXguQW6By"
    },
    {
      "Timestamp": "6/4/2020 12:43:54",
      "Email Address": "betiel.ghirmayaraia@student.tdsb.on.ca",
      "First Name": "Betiel",
      "Last Name": "Ghirmay",
      "Grade": 12,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "Fusion",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Other",
      "The theme of your art (choose all that apply)": "Fiction",
      "Style (choose all that apply)": "Abstract, Figurative Art, Modern",
      "Medium (choose all that apply)": "Pastel",
      "Subject (choose all that apply)": "Portrait",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "Betiel-Ghirmay-Fusion",
      "Please upload your art here.": "https://drive.google.com/open?id=1w1ZN_mr9dBO0cwtA6zzWI8Uw0Mh0Vluj"
    },
    {
      "Timestamp": "6/4/2020 12:58:11",
      "Email Address": "betiel.ghirmayaraia@student.tdsb.on.ca",
      "First Name": "Betiel",
      "Last Name": "Ghirmay",
      "Grade": 12,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "Complete",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Other",
      "The theme of your art (choose all that apply)": "Fiction",
      "Style (choose all that apply)": "Abstract, Portraiture Art",
      "Medium (choose all that apply)": "Ink, Pastel",
      "Subject (choose all that apply)": "Portrait",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "Betiel-Ghirmay-Complete",
      "Please upload your art here.": "https://drive.google.com/open?id=185sKEEoSCqagVU-E8GbNpRSKc1hepFSL"
    },
    {
      "Timestamp": "6/4/2020 13:22:21",
      "Email Address": "betiel.ghirmayaraia@student.tdsb.on.ca",
      "First Name": "Betiel",
      "Last Name": "Ghirmay",
      "Grade": 12,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "Afro Features",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Other",
      "The theme of your art (choose all that apply)": "Community",
      "Style (choose all that apply)": "Abstract, Modern, Portraiture Art",
      "Medium (choose all that apply)": "Pastel",
      "Subject (choose all that apply)": "Portrait",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "Betiel-Ghirmay-Afro Features",
      "Please upload your art here.": "https://drive.google.com/open?id=1JLOs6gL2FKFA_nKbNZ0m0xll4fbvOkLn"
    },
    {
      "Timestamp": "6/4/2020 14:01:10",
      "Email Address": "carol.jokinen@tdsb.on.ca",
      "First Name": "Carol",
      "Last Name": "Jokinen",
      "Grade": "Staff",
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "I am staff",
      "Name of your piece of artwork": "Portrait",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Photography",
      "The theme of your art (choose all that apply)": "Community",
      "Style (choose all that apply)": "Photography",
      "Medium (choose all that apply)": "Digital Photography",
      "Subject (choose all that apply)": "Animal",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "Portrait.JPG",
      "Please upload your art here.": "https://drive.google.com/open?id=1zjgwk-E-xxKL49UIS5Cnla6MvP8sIVMT"
    },
    {
      "Timestamp": "6/4/2020 14:03:15",
      "Email Address": "carol.jokinen@tdsb.on.ca",
      "First Name": "Carol",
      "Last Name": "Jokinen",
      "Grade": "Staff",
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "I am staff",
      "Name of your piece of artwork": "Carol Jokinen-Need Haircut",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Photography",
      "The theme of your art (choose all that apply)": "Community",
      "Style (choose all that apply)": "Photography",
      "Medium (choose all that apply)": "Digital Photography",
      "Subject (choose all that apply)": "Animal",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "Need Haircut.jpg",
      "Please upload your art here.": "https://drive.google.com/open?id=16ATRdCu176Nrww-VQHqZb7FNqwb4h6Fv"
    },
    {
      "Timestamp": "6/4/2020 14:06:36",
      "Email Address": "carol.jokinen@tdsb.on.ca",
      "First Name": "Carol",
      "Last Name": "Jokinen",
      "Grade": "Staff",
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "I am staff",
      "Name of your piece of artwork": "Squirrelly",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Photography",
      "The theme of your art (choose all that apply)": "Community",
      "Style (choose all that apply)": "Photography",
      "Medium (choose all that apply)": "Digital Photography",
      "Subject (choose all that apply)": "Animal",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "Carol-Jokinen-Squirrelly.jpg",
      "Please upload your art here.": "https://drive.google.com/open?id=1QaKxTF29fO2Aaap95NQ82SujNf9dC4yT"
    },
    {
      "Timestamp": "6/4/2020 20:03:12",
      "Email Address": "michelle.sin@student.tdsb.on.ca",
      "First Name": "Michelle",
      "Last Name": "Sin",
      "Grade": 12,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "Woman with the Animal Hat",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Painting",
      "The theme of your art (choose all that apply)": "Fiction",
      "Style (choose all that apply)": "Portraiture Art, Surrealism Art",
      "Medium (choose all that apply)": "Acrylic",
      "Subject (choose all that apply)": "Animal, Portrait",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "Michelle-Sin-Woman with the Animal Hat.jgp",
      "Please upload your art here.": "https://drive.google.com/open?id=1cDo60h4M9ahhA5WyGEZ3c_xxTAsaeWbU"
    },
    {
      "Timestamp": "6/4/2020 20:19:01",
      "Email Address": "michelle.sin@student.tdsb.on.ca",
      "First Name": "Michelle",
      "Last Name": "Sin",
      "Grade": 12,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "Mona Spam",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Drawing",
      "The theme of your art (choose all that apply)": "Values",
      "Style (choose all that apply)": "Realism, Surrealism Art",
      "Medium (choose all that apply)": "Pencil",
      "Subject (choose all that apply)": "Portrait",
      "What is the orientation of your art?": "Vertical",
      "Please enter the exact name of your artwork, including the extension:": "Michelle-Sin-Mona Spam.jpg",
      "Please upload your art here.": "https://drive.google.com/open?id=1CAqsZr7WuWggnQ6zbeBkZZP7uUWC1In6"
    },
    {
      "Timestamp": "6/5/2020 15:15:12",
      "Email Address": "ellie.labbancz@student.tdsb.on.ca",
      "First Name": "Ellie",
      "Last Name": "Labbancz",
      "Grade": 11,
      "School": "Danforth CTI",
      "Name of your art teacher 2019-2020": "Ms. Jokinen",
      "Name of your piece of artwork": "Film Camera",
      "Please provide an artist's statement (250 Words Maximum) (Optional)": "",
      "Category": "Drawing",
      "The theme of your art (choose all that apply)": "Values",
      "Style (choose all that apply)": "Realism",
      "Medium (choose all that apply)": "Pencil",
      "Subject (choose all that apply)": "Still Life",
      "What is the orientation of your art?": "Horizontal",
      "Please enter the exact name of your artwork, including the extension:": "Film Camera, Ellie-Labbancz-FilmCamera.JPEG",
      "Please upload your art here.": "https://drive.google.com/open?id=168WkNsrMPJuA7b7cKbw9w9cKJFuojy0W"
    }
  ];


  for(var i = 0; i < arrayJson.length; i++){
  
    // console.log( arrayJson[i]['First Name']);
    const optionBox = document.querySelector('.optionBox');
    const option = document.createElement('div');
    const input = document.createElement('input');
    const label = document.createElement('label');
    
    if(i == 0) {

            // setup label for optionBox
            option.setAttribute('class', 'option');
            // setup input button for option
            input.setAttribute('type', 'radio');
            input.setAttribute('name', 'category');
            input.setAttribute('class', 'radio');
            input.setAttribute('id', arrayJson[i]['First Name']);
        
            // setup label for option
            label.setAttribute('for', arrayJson[i]['First Name']);
            label.innerHTML = arrayJson[i]['First Name'] + " " + arrayJson[i]['Last Name'];
        
            // console.log(input);
        
            // console.log(label);
            option.appendChild(input);
            option.appendChild(label);
            optionBox.appendChild(option);
            console.log(optionBox);
        
    }
    
    else{


        if(arrayJson[i]['First Name'] != arrayJson[i-1]['First Name']){
            // setup label for optionBox
            option.setAttribute('class', 'option');
            // setup input button for option
            input.setAttribute('type', 'radio');
            input.setAttribute('name', 'category');
            input.setAttribute('class', 'radio');
            input.setAttribute('id', arrayJson[i]['First Name']);
        
            // setup label for option
            label.setAttribute('for', arrayJson[i]['First Name']);
            label.innerHTML = arrayJson[i]['First Name'] + " " + arrayJson[i]['Last Name'];
        
            // console.log(input);
        
            // console.log(label);
            option.appendChild(input);
            option.appendChild(label);
            optionBox.appendChild(option);
            // console.log(optionBox);
            }
          }


    }
   



}


const navOpen = () => {
    const burger = document.querySelector('.burger');
    const list = document.querySelector('.nav-list');
    const links = document.querySelectorAll('.nav-list li');
    const stay = document.querySelector('.text h1');    
    // const icons                      
    burger.addEventListener('click', () => {

        list.classList.toggle('nav-Open');

    
        stay.classList.toggle('remove');



        

        links.forEach((Link, index) => {
           
            if (Link.style.animation){

                Link.style.animation = '';


            } else {

                Link.style.animation = 'navAnime 1s ease forwards 0.5s';
           
            }
        });
        


        burger.classList.toggle('toggle');




    });


}

const navChange = () => {

    const nav = document.querySelector('.nav-bar');
    const direct = document.querySelector('.direct');
    const form = document.querySelector('.contactForm');
    const donation = document.querySelector('.practice');
    const before = document.querySelector('.practiceParagraph::before');
    const after =  document.querySelector('.practiceParagraph::after');
    
    console.log(donation);
    window.addEventListener('scroll', ()=> {

        nav.classList.toggle('navChange', window.scrollY > 0);
        if(direct.className == 'gone' && window.scrollY < 50){direct.classList.remove('gone');}
        else{direct.classList.toggle('gone', window.scrollY > 50);}
        
        form.classList.toggle('up', window.scrollY  > 60 );
        if(form.style.animation) {
            form.style.animation ='';

        } else{
        form.style.animation = 'boxy 1s ease forwards 1s';
        // needs work, also work on smooth scrolling    
        }


        donation.classList.toggle('houdini', window.scrollY > 800);
      

    });
}


    const socialBar = () =>{

        const icons = document.querySelectorAll('.icons li');
        const arrow = document.querySelector('.arrow');
        icons.forEach( (icon) => {
            // console.log('Betty Ghirmay is the most gorgeous woman ever :)');
            icon.style.animation = 'iconAnime 2s ease forwards 2s';


        });

        

    }


    const animatedForm = ()=> {
        const arrowsR = document.querySelectorAll('.fa-arrow-right');
        const arrowsL = document.querySelectorAll('.fa-arrow-left');
        arrowsR.forEach( arrow => {

            arrow.addEventListener( 'click', ()=>{

                const parent = arrow.parentElement;
                const nextElement = parent.nextElementSibling;
                // console.log(nextElement);
                parent.classList.add('inactive');
                parent.classList.remove('active');
                nextElement.classList.add('active');


            });
            
        });


        arrowsL.forEach(arrow => {

            arrow.addEventListener('click', () => {

                const parent = arrow.parentElement;
                const previousElement = parent.previousElementSibling;

                parent.classList.add('inactive');
                parent.classList.remove('active');
                previousElement.classList.add('active');


            });


        });



    }

    const selectMenu = () => {

        const selected = document.querySelector('.selected');
        const selectedInner = document.querySelector('.selected h2');
        const optionBox = document.querySelector('.optionBox');
        const options = document.querySelectorAll('.option');
        const searchBox = document.querySelector('.searchBox input');
        const back = document.querySelector('.fa-chevron-left');

        selected.addEventListener( 'click', () => {

        
            searchBox.value = '';
            filterList('');

            optionBox.classList.toggle('open');
            // back.classList.add('IAMove');
 
            if(optionBox.classList.contains('open')) {

                searchBox.focus();

            }

            // onsecuritypolicyviolation. checkout later

        });

        back.addEventListener( 'click', () => {


            optionBox.classList.remove('open');


        });

        options.forEach( o => {
            o.addEventListener('click', () => {
            
                selectedInner.innerHTML = o.querySelector("label").innerHTML;
                optionBox.classList.remove('open');

            });
      
        });


        searchBox.addEventListener('keyup', function(e) {
            filterList(e.target.value);

        });


        const filterList = searchTerm => {

        searchTerm = searchTerm.toLowerCase();

        options.forEach( option => {
            let label = option.firstElementChild.nextElementSibling.innerHTML.toLowerCase();

            if(label.indexOf(searchTerm) != -1){

                option.style.display = 'block';

            } else {
                option.style.display = 'none';

            }




        });

        }



    }
 
// const scroll = () =>{

//     const trigger = document.querySelector('.arrow');

//     trigger.addEventListener('click', () => {

//         document.getElementById('donation').scrollIntoView({

//             behaviour: 'smooth'
//         });



//     });


// }

const copyCat = () => {

    const options = document.querySelectorAll('.option');
    
    for( var i = 0; i < options.length; i++){
        // console.log(options[i].firstElementChild.nextElementSibling.innerHTML);
        for(var j = 1; j < options.length; j++){

        //     if(options[j].firstElementChild.nextElementSibling.innerHTML == options[i].firstElementChild.nextElementSibling.innerHTML )
        //    { 
        //        options[j].remove();
        
        // }

        }

    }


    



}


searchFriends();
copyCat();
navChange();
navOpen();
socialBar();
animatedForm();
selectMenu();
// scroll();



