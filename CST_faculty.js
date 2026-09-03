document.getElementById("profile").style.display = "none";

let facultyList = [

    // 1. Abhik Mukherjee
    {
        name: "Abhik Mukherjee",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW9yqUI3hFxCupcTh5xBdHmFhDwZZp8fEM2XyavMb1bQ&s=10",
        email: "abhik@cs.iiests.ac.in",
        qualification: "Ph.D. in Computer Science, BESU Shibpur, 2003",
        subjects: ["CST", "CSE"],
        research: [
            "Estimation theory for Meteorology",
            "Estimation Theory for Navigation and Control Applications",
            "Information systems and related algorithm",
            "Estimation and Control applied to Systems Biology",
            "Online social media analysis",
            "Control applications for energy systems"
        ]
    },

    // 2. Amit Biswas
    {
        name: "Amit Biswas",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqVxQHHd_ASx2kF_XXDGS2_M6OMg0J0BFeMPgZjV9LFw&s=10",
        email: "amitbiswas@cs.iiests.ac.in",
        qualification: "Ph.D. in Computer Science and Engineering, IIT (BHU), Varanasi",
        subjects: ["CST", "CSE"],
        research: [
            "Distributed Systems",
            "Cloud Computing",
            "Blockchain Technology",
            "Multi-Criteria Decision-Making (MCDM)",
            "Quantum Computing"
        ]
    },

    // 3. Apurba Sarkar
    {
        name: "Apurba Sarkar",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQu2z724SXYWVEgZokJHzzfexcws0ZJNTTH3Ui8G6gAEA&s=10",
        email: "apurba@cs.iiests.ac.in",
        qualification: "Ph.D. in Computer Science and Engineering, IIT Kanpur, 2016",
        subjects: ["CST", "CSE"],
        research: [
            "Digital Geometry",
            "Combinatorial Geometry",
            "Discrete Geometry",
            "Computational Geometry",
            "Image Processing",
            "Shape Analysis",
            "Shape Classification",
            "Text Summarization",
            "Graph Compression"
        ]
    },

    // 4. Ashish Kumar Layek
    {
        name: "Ashish Kumar Layek",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdf2kLVbomEmyZPWCr-R2esw4v0MVnVsf6S6ofOorxIA&s=10",
        email: "ashish@cs.iiests.ac.in",
        qualification: "M.E. in Computer Science and Technology, Bengal Engineering College (DU), 2001",
        subjects: ["CST", "CSE"],
        research: [
            "Wireless Telecommunication and Networking",
            "Pattern Recognition",
            "Computer Vision",
            "Digital Image Processing"
        ]
    },

    // 5. Asit Kumar Das
    {
        name: "Asit Kumar Das",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw_a_HUGLOgcK6IboBMyhGz-8ff5OVEbWDJOQsaEL58Q&s=10",
        email: "akdas@cs.iiests.ac.in",
        qualification: "Ph.D. (Engineering) in Computer Science and Technology, Bengal Engineering and Science University, 2011",
        subjects: ["CST", "CSE"],
        research: [
            "Machine Learning",
            "Big Data Analytics",
            "Data Mining and Pattern Recognition",
            "Soft Computing and Artificial Intelligence",
            "Natural Language Processing",
            "Social Networks",
            "Bioinformatics",
            "Medical Image Analysis",
            "Text, Audio and Video Data Analysis"
        ]
    },

    // 6. Biplab K. Sikdar
    {
        name: "Biplab K. Sikdar",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQGbXfEB20iklckzJEe3K6vLMWu00ItzBloRFCzmF3MA&s=10",
        email: "biplab@cs.iiests.ac.in",
        qualification: "Ph.D. from Bengal Engineering and Science University, Shibpur, 2003",
        subjects: ["CST", "CSE"],
        research: [
            "Cellular Automata",
            "Computer Architecture"
        ]
    },

    // 7. Devleena Ghosh
    {
        name: "Devleena Ghosh",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLM4_LLlnqKWydG4pODmeTwog8kSE90ztIeeXr0yVS7A&s=10",
        email: "devleena@cs.iiests.ac.in",
        qualification: "Ph.D. in Computer Science and Engineering, IIT Kharagpur",
        subjects: ["CST", "CSE"],
        research: [
            "Computational Biology",
            "ML Applications",
            "Formal Methods Applications",
            "Testing and Verification of Circuits"
        ]
    },

    // 8. Jaya Sil
    {
        name: "Jaya Sil",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJDomHFEg22btmRvf35SQX14zx1zCExB5xvwkhc1l8ZQ&s=10",
        email: "js@cs.iiests.ac.in",
        qualification: "Ph.D. in Computer Science, specialization in Artificial Intelligence and Soft Computing, 1996",
        subjects: ["CST", "CSE"],
        research: [
            "Image Processing and Computer Vision",
            "Machine Learning",
            "Bio-Informatics"
        ]
    },

    // 9. Malay Kule
    {
        name: "Malay Kule",
        photo: "https://oldwww1926.iiests.ac.in/assets/images/faculty/669e11b61a0261000003808.jpg",
        email: "malay@cs.iiests.ac.in",
        qualification: "Ph.D. in Engineering, IIEST Shibpur",
        subjects: ["CST", "CSE"],
        research: [
            "Defect Tolerance of Nanoscale Crossbar Circuits",
            "Cryptology",
            "Hardware Security"
        ]
    },

    // 10. Manas Hira
    {
        name: "Manas Hira",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR44CrSbVFfVMqN8-iHqM2mDFhMWh7pr3XzOmutDq5cRg&s=10",
        email: "manas@cs.iiests.ac.in",
        qualification: "M.Tech. in Computer Science and Engineering, IIT Kharagpur, 1991",
        subjects: ["CST", "CSE"],
        research: [
            "Circuit Verification using Temporal Logic"
        ]
    },

    // 11. Nirnay Ghosh
    {
        name: "Nirnay Ghosh",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQB7y4gYScXm-CCev2rFYej5AHEmJkSiM2mHNMkRin5Ew&s=10",
        email: "nirnay@cs.iiests.ac.in",
        qualification: "Doctor of Philosophy (PhD), IIT Kharagpur, 2016",
        subjects: ["CST", "CSE"],
        research: [
            "IoT Security",
            "Smart City Applications",
            "Mobile Crowdsensing / Participatory Sensing"
        ]
    },

    // 12. Samit Biswas
    {
        name: "Samit Biswas",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6V2CHhUp-SO73Jp0Db7fFBzIrNdPJxG9OTynxFVhC_Q&s=10",
        email: "samit@cs.iiests.ac.in",
        qualification: "PhD",
        subjects: ["CST", "CSE"],
        research: [
            "Machine Learning and its Application",
            "Digital Image Processing and Analysis",
            "Document Image Analysis",
            "Image Processing and Pattern Recognition",
            "Computer Vision",
            "Machine-based Translation",
            "Social Network Analysis",
            "Natural Language Processing and its Application",
            "Data Mining and Pattern Recognition"
        ]
    },

    // 13. Sekhar Mandal
    {
        name: "Sekhar Mandal",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIahtks5qIUoLk9nzI7v5s_Tc3DVTLEWR5CyLkPjyZeA&s=10",
        email: "sekhar@cs.iiests.ac.in",
        qualification: "Ph.D. in Computer Science and Technology, Bengal Engineering and Science University, Shibpur, 2007",
        subjects: ["CST", "CSE"],
        research: [
            "Image Processing and Pattern Recognition"
        ]
    },

    // 14. Sipra Das Bit
    {
        name: "Sipra Das Bit",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDSag-Z3NWIBlNB_JDuC_-Dx7EaaajfZm3tRqBRyvJKg&s=10",
        email: "sb@cs.iiests.ac.in",
        qualification: "Ph.D. (Engineering) from Jadavpur University, Kolkata, 1997",
        subjects: ["CST", "CSE"],
        research: [
            "Internet of Things (IoT)",
            "Mobile Computing",
            "Wireless Sensor Network",
            "Delay Tolerant Network"
        ]
    },

    // 15. Soumen Moulik
    {
        name: "Soumen Moulik",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmVjF3DNordsnjuTRUaOsRZ9Gio_2FRHFUzh94pvARnw&s=10",
        email: "soumen@cs.iiests.ac.in",
        qualification: "PhD from Indian Institute of Technology Kharagpur",
        subjects: ["CST", "CSE"],
        research: [
            "Analysis of sensor-acquired raw data using Machine Learning algorithms",
            "MAC layer functionalities of IEEE 802.15.4 and IEEE 802.15.6 standard",
            "QoS provisioning in Wireless Personal / Body Area Networks (WPANs/WBANs)",
            "Real-time and ubiquitous IoT system development (mainly for healthcare applications)"
        ]
    },

    // 16. Sulata Mitra
    {
        name: "Sulata Mitra",
        photo: "https://i.ytimg.com/vi/B-KPNmwrP00/hqdefault.jpg",
        email: "sulata@cs.iiests.ac.in",
        qualification: "Ph.D.",
        subjects: ["CST", "CSE"],
        research: [
            "Ad-hoc Network",
            "Multihomed Mobile Network",
            "Mobile Computing"
        ]
    },

    // 17. Surajeet Ghosh
    {
        name: "Surajeet Ghosh",
        photo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBRswgs_bFMWZKNYlKDCmjrzHcdbBO3hNpgQi6XtiM9g&s=10",
        email: "surajeet@cs.iiests.ac.in",
        qualification: "Ph.D. (Engineering), Jadavpur University, Kolkata, India",
        subjects: ["CST", "CSE"],
        research: [
            "Hardware Accelerators",
            "Machine Learning for Embedded Systems",
            "Neuromorphic Computing",
            "Custom Computing",
            "Computational Architecture for Next Generation Sequencing",
            "FPGA Based Embedded Systems Design"
        ]
    },

    // 18. Tamal Pal
    {
        name: "Tamal Pal",
        photo: "https://oldwww1926.iiests.ac.in/assets/images/faculty/5dca99372efa6tamal_pal.jpg",
        email: "tamal@cs.iiests.ac.in",
        qualification: "Ph.D. (Engineering), Computer Science and Technology, IIEST",
        subjects: ["CST", "CSE"],
        research: [
            "Computer Vision: Multimedia (Image, Video, etc.) Processing",
            "Multimedia Communication over Wireless Networks (WMSN, DTN, VANET, etc.)",
            "Multimedia Security",
            "AIML (Artificial Intelligence & Machine Learning)",
            "Games Programming"
        ]
    }

];

function searchFaculty() {

    let input = document.getElementById("facultyInput");
    let inputName = input.value;

    let faculty = facultyList.find(f => f.name.toLowerCase() === inputName.trim().toLowerCase());

    let profile = document.getElementById("profile");
    let message = document.getElementById("message");


    if (faculty) {

        profile.style.display = "block";
        message.textContent = "";

        document.getElementById("facultyName").textContent = faculty.name;

        document.getElementById("facultyEmail").textContent = faculty.email;

        document.getElementById("facultyQualification").textContent = faculty.qualification;

        document.getElementById("facultyPhoto").src = faculty.photo;

        let subjectsList = document.getElementById("subjects");
        subjectsList.innerHTML = "";

        for (let i = 0; i < faculty.subjects.length; i++) {

            let item = document.createElement("li");

            item.textContent = faculty.subjects[i];

            subjectsList.appendChild(item);
        }


        let researchList = document.getElementById("research");
        researchList.innerHTML = "";

        for (let i = 0; i < faculty.research.length; i++) {

            let item = document.createElement("li");

            item.textContent = faculty.research[i];

            researchList.appendChild(item);
        }

    }
    else {

        profile.style.display = "none";

        message.textContent = "Faculty not found !";
    }
}

let searchButton = document.getElementById("searchButton");

searchButton.addEventListener("click", searchFaculty);