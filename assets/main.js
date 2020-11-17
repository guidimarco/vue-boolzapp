var app = new Vue({ // VUE INSTANCE
    el: "#root",
    data: {
        // VAR
        contactIndex: "0", // current-contact-index
        userSearch: "",
        isSearching: false,
        newMessage: "",
        showMsgMenu: false,

        // OBJ
        user: {
            name: "Marco",
            avatar: "_user.jpg"
        },

        // ARRAY
        userContacts: [ // all user-contacts
            { // contact
                name: "Michele",
                avatar: "_1.jpg",
                visible: true,
                messages: [ // messages
                    {
                        data: "16/11/2020 08:58:45",
                        message: "Hai portato a spasso il cane?",
                        status: "sent"
                    },
                    {
                        data: "16/11/2020 08:59:32",
                        message: "Ricordati di dargli da mangiare",
                        status: "sent"
                    },
                    {
                        data: "16/11/2020 10:11:23",
                        message: "Si tranquillo...",
                        status: "received"
                    },
                ]
            },
            { // contact
                name: "Paola",
                avatar: "_2.jpg",
                visible: true,
                messages: [ // messages
                    {
                        data: "15/11/2020 12:21:21",
                        message: "Ciao Paola come stai?",
                        status: "sent"
                    },
                    {
                        data: "15/11/2020 12:22:01",
                        message: "Hai fatto quello che ti ho detto di fare?",
                        status: "sent"
                    },
                    {
                        data: "15/11/2020 13:02:01",
                        message: "Bene grazie",
                        status: "received"
                    },
                    {
                        data: "15/11/2020 13:02:55",
                        message: "Te?",
                        status: "received"
                    },
                    {
                        data: "15/11/2020 13:04:56",
                        message: "Non ce l'ho fatta, sono dovuta andare dal medico...",
                        status: "received"
                    },
                    {
                        data: "15/11/2020 14:22:36",
                        message: "Come mai? Successo qualcosa?",
                        status: "sent"
                    },
                    {
                        data: "15/11/2020 14:44:36",
                        message: "Tranquillo tutto ok, se ne parla domani...",
                        status: "received"
                    },
                    {
                        data: "15/11/2020 14:47:47",
                        message: "Ok fai ammodo",
                        status: "sent"
                    },
                    {
                        data: "15/11/2020 14:48:26",
                        message: "Allora, che mi racconti?",
                        status: "sent"
                    },
                    {
                        data: "15/11/2020 14:48:55",
                        message: "Niente di che... poi ieri non sei venuto al pub? Come mai? successo qualcosa... Nicola mi ha accennato",
                        status: "received"
                    },
                    {
                        data: "15/11/2020 20:00:00",
                        message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        status: "sent"
                    },
                    {
                        data: "15/11/2020 20:01:00",
                        message: "Capito?",
                        status: "sent"
                    },
                    {
                        data: "15/11/2020 20:02:00",
                        message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        status: "received"
                    },
                    {
                        data: "15/11/2020 20:04:00",
                        message: "Ok fai ammodo",
                        status: "sent"
                    },
                ]
            },
            { // contact
                name: "Francesco",
                avatar: "_3.jpg",
                visible: true,
                messages: [ // messages
                    {
                        data: "10/01/2020 15:30:55",
                        message: "Lorem ipsum",
                        status: "sent"
                    },
                    {
                        data: "10/01/2020 15:50:00",
                        message: "Lorem ipsum?",
                        status: "sent"
                    },
                    {
                        data: "10/01/2020 16:15:22",
                        message: "Lorem ipsum!",
                        status: "received"
                    },
                    {
                        data: "10/01/2020 15:50:00",
                        message: "Lorem ipsum?",
                        status: "sent"
                    },
                    {
                        data: "10/01/2020 16:15:22",
                        message: "Lorem ipsum...",
                        status: "received"
                    },
                    {
                        data: "10/01/2020 15:50:00",
                        message: "Lorem ipsum :(",
                        status: "sent"
                    },
                    {
                        data: "10/01/2020 16:15:22",
                        message: "Lorem ipsum!",
                        status: "received"
                    },
                ]
            },
            { // contact
                name: "Boolean",
                avatar: "_4.png",
                visible: true,
                messages: [ // messages
                    {
                        data: "10/01/2020 15:30:55",
                        message: "Ciao Boolean",
                        status: "sent"
                    },
                    {
                        data: "10/01/2020 15:50:00",
                        message: "Come stai?",
                        status: "sent"
                    },
                    {
                        data: "10/01/2020 16:15:22",
                        message: "Bene! Come ti trovi con vue?",
                        status: "received"
                    },
                    {
                        data: "10/01/2020 15:50:00",
                        message: "Lasciamo perdere... lorem ipsum...",
                        status: "sent"
                    },
                    {
                        data: "10/01/2020 16:15:22",
                        message: "Non avevo dubbi",
                        status: "received"
                    },
                ]
            },
            { // contact
                name: "Donato",
                avatar: "_5.jpg",
                visible: true,
                messages: [ // messages
                    {
                        data: "01/01/2020 12:30:55",
                        message: "Hey com'è?",
                        status: "sent"
                    },
                    {
                        data: "01/01/2020 12:35:00",
                        message: "Tutto bene te?",
                        status: "received"
                    },
                    {
                        data: "01/01/2020 12:35:00",
                        message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        status: "sent"
                    },
                ]
            },
            { // contact
                name: "Marzia",
                avatar: "_6.jpg",
                visible: true,
                messages: [ // messages
                    {
                        data: "10/01/2020 15:30:55",
                        message: "Lorem ipsum",
                        status: "sent"
                    },
                    {
                        data: "10/01/2020 15:50:00",
                        message: "Lorem ipsum?",
                        status: "sent"
                    },
                    {
                        data: "10/01/2020 16:15:22",
                        message: "Lorem ipsum!",
                        status: "received"
                    },
                    {
                        data: "10/01/2020 15:50:00",
                        message: "Lorem ipsum?",
                        status: "sent"
                    },
                    {
                        data: "10/01/2020 16:15:22",
                        message: "Lorem ipsum...",
                        status: "received"
                    },
                    {
                        data: "10/01/2020 15:50:00",
                        message: "Lorem ipsum :(",
                        status: "sent"
                    },
                    {
                        data: "10/01/2020 16:15:22",
                        message: "Lorem ipsum!",
                        status: "received"
                    },
                ]
            },
            { // contact
                name: "Marco",
                avatar: "_7.jpg",
                visible: true,
                messages: [ // messages
                    {
                        data: "10/01/2020 15:30:55",
                        message: "Hai portato a spasso il cane?",
                        status: "sent"
                    },
                    {
                        data: "10/01/2020 15:50:00",
                        message: "Ricordati di dargli da mangiare",
                        status: "sent"
                    },
                    {
                        data: "10/01/2020 16:15:22",
                        message: "Tutto fatto!",
                        status: "received"
                    },
                ]
            },
            { // contact
                name: "Martina",
                avatar: "_8.jpg",
                visible: true,
                messages: [ // messages
                    {
                        data: "10/01/2020 15:30:55",
                        message: "Lorem ipsum",
                        status: "sent"
                    },
                    {
                        data: "10/01/2020 15:50:00",
                        message: "Lorem ipsum?",
                        status: "sent"
                    },
                    {
                        data: "10/01/2020 16:15:22",
                        message: "Lorem ipsum!",
                        status: "received"
                    },
                    {
                        data: "10/01/2020 15:50:00",
                        message: "Lorem ipsum?",
                        status: "sent"
                    },
                    {
                        data: "10/01/2020 16:15:22",
                        message: "Lorem ipsum...",
                        status: "received"
                    },
                    {
                        data: "10/01/2020 15:50:00",
                        message: "Lorem ipsum :(",
                        status: "sent"
                    },
                    {
                        data: "10/01/2020 16:15:22",
                        message: "Lorem ipsum!",
                        status: "received"
                    },
                ]
            },
            { // contact
                name: "Lucia",
                avatar: "_9.jpg",
                visible: true,
                messages: [ // messages
                    {
                        data: "10/01/2020 15:30:55",
                        message: "Hai portato a spasso il cane?",
                        status: "sent"
                    },
                    {
                        data: "10/01/2020 15:50:00",
                        message: "Ricordati di dargli da mangiare",
                        status: "sent"
                    },
                    {
                        data: "10/01/2020 16:15:22",
                        message: "Tutto fatto!",
                        status: "received"
                    },
                ]
            },
            { // contact
                name: "Matteo",
                avatar: "_10.jpg",
                visible: true,
                messages: [
                {
                    data: "10/01/2020 15:30:55",
                    message: "Lorem ipsum",
                    status: "sent"
                },
                {
                    data: "10/01/2020 15:50:00",
                    message: "Lorem ipsum?",
                    status: "sent"
                },
                {
                    data: "10/01/2020 16:15:22",
                    message: "Lorem ipsum!",
                    status: "received"
                },
                {
                    data: "10/01/2020 15:50:00",
                    message: "Lorem ipsum?",
                    status: "sent"
                },
                {
                    data: "10/01/2020 16:15:22",
                    message: "Lorem ipsum...",
                    status: "received"
                },
                {
                    data: "10/01/2020 15:50:00",
                    message: "Lorem ipsum :(",
                    status: "sent"
                },
                {
                    data: "10/01/2020 16:15:22",
                    message: "Lorem ipsum!",
                    status: "received"
                },
                ]
            },
        ],
    },
    computed: {

    },
    methods: { // for function
        changeContact: function(clickedIndex) {
            this.contactIndex = clickedIndex;
        },
        isCurrent: function(currentIndex) {
            return this.contactIndex == currentIndex;
        },
        changeVisibility: function() {
            let currentSearch = this.userSearch.toLowerCase(); // get user's current search

            // FOR EVERY FILTERED CONTACT
            this.userContacts.forEach((currentContact, i) => {
                // GET FILTERED CONTACT NAME AND LOWERED IT
                let currentName = currentContact.name.toLowerCase();

                if (!currentName.includes(currentSearch)) {
                    // IF user search it's not includes
                    currentContact.visible = false;
                } else if (currentName.includes(currentSearch)) {
                    // IF user search it's includes
                    currentContact.visible = true;
                }
            });
        },
        sendMessage: function() {
            // if newMessage it's empty --> end function

            if (this.newMessage) {
                // if newMessage it's not empty
                // LOCAL VAR
                let currentContact = this.userContacts[this.contactIndex];
                let newMsgObj = {
                    data: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                    message: this.newMessage,
                    status: "sent"
                };

                currentContact.messages.push(newMsgObj); // push new msg
                this.newMessage = ""; // re-clear the input value

                // contact responde
                setTimeout(() => {
                    // LOCAL VAR
                    let msgReply = {
                        data: dayjs().format('DD/MM/YYYY HH:mm:ss'),
                        message: "ok",
                        status: "received"
                    };

                    currentContact.messages.push(msgReply); // push reply
                }, 1000);
            }

        },
        deleteMsg: function(currentMsgIndex) {
            // LOCAL VAR
            allContactMsgs = this.userContacts[this.contactIndex].messages; // current user's messages array
            msgToDelete = allContactMsgs[currentMsgIndex]; // msg clicked

            msgToDelete.status = "delete"; // change status

            this.showMsgMenu = false; // hidden the menu
        },
        printLastMsg: function(currentContact) {
            let lastMsgIndex = currentContact.messages.length - 1;

            let lastMsg = currentContact.messages[lastMsgIndex].message; // last msg

            return lastMsg.substring(0, 25);
        },
        printLastMsgHour: function(currentContact) {
            let lastMsgIndex = currentContact.messages.length - 1;

            let lastMsgDate = currentContact.messages[lastMsgIndex].data; // last msg

            return this.printHour(lastMsgDate);
        },
        printHour: function(date) {
            return dayjs(date, "DD/MM/YYYY HH:mm:ss", "en").format('HH:mm');
        },
    },
    watch: {
        // for change contacts visibility
        userSearch: function () {
            this.changeVisibility();
        }
    },
    directives: {
        autoscroll: {
            inserted: function(el) {
                // console.log(el);
                Vue.nextTick(() => {
                    el.scrollTop = el.scrollHeight;
                });
            },
            update: function(el) {
                // console.log(el);
                Vue.nextTick(() => {
                    el.scrollTop = el.scrollHeight;
                });
            },
        }
    },
});
