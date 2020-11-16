var app = new Vue({ // VUE INSTANCE
    el: "#root",
    data: { // for var
        user: {
            name: "Marco",
            avatar: "_user.jpg"
        },
        contactIndex: "0", // current-contact-index
        userContacts: [ // all user-contacts
            { // contact
                name: "Michele",
                avatar: "_1.jpg",
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
                name: "Paola",
                avatar: "_2.jpg",
                visible: true,
                messages: [ // messages
                    {
                        data: "10/01/2020 15:30:55",
                        message: "Ciao Paola come stai?",
                        status: "sent"
                    },
                    {
                        data: "10/01/2020 15:50:00",
                        message: "Hai fatto quello che ti ho detto di fare?",
                        status: "sent"
                    },
                    {
                        data: "10/01/2020 16:15:22",
                        message: "Bene grazie",
                        status: "received"
                    },
                    {
                        data: "10/01/2020 16:15:22",
                        message: "Te?",
                        status: "received"
                    },
                    {
                        data: "10/01/2020 16:15:22",
                        message: "Non ce l'ho fatta, sono dovuta andare dal medico...",
                        status: "received"
                    },
                    {
                        data: "10/01/2020 16:15:22",
                        message: "Come mai? Successo qualcosa?",
                        status: "sent"
                    },
                    {
                        data: "10/01/2020 16:15:22",
                        message: "Tranquillo tutto ok, se ne parla domani...",
                        status: "received"
                    },
                    {
                        data: "10/01/2020 16:15:22",
                        message: "Ok fai ammodo",
                        status: "sent"
                    },
                    {
                        data: "10/01/2020 16:15:22",
                        message: "Allora, che mi racconti?",
                        status: "sent"
                    },
                    {
                        data: "10/01/2020 16:15:22",
                        message: "Niente di che... poi ieri non sei venuto al pub? Come mai? successo qualcosa... Nicola mi ha accennato",
                        status: "received"
                    },
                    {
                        data: "10/01/2020 16:15:22",
                        message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        status: "sent"
                    },
                    {
                        data: "10/01/2020 16:15:22",
                        message: "Capito?",
                        status: "sent"
                    },
                    {
                        data: "10/01/2020 16:15:22",
                        message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
                        status: "received"
                    },
                    {
                        data: "10/01/2020 16:15:22",
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
        searContact: "",
        searchFocus: false,
        newMessage: "",
    },
    computed: {
        filteredContacts: function() { // visible-contacts
            return this.userContacts.filter( (currentContact) => {
                return currentContact.visible;
            });
        },
    },
    methods: { // for function
        changeContact: function(clickedIndex) {
            this.contactIndex = clickedIndex;
            this.scrollToEnd();
        },
        isCurrent: function(currentIndex) {
            return this.contactIndex == currentIndex;
        },
        scrollToEnd: function() {
            setTimeout(() => {
                var container = this.$el.querySelector(".messages-container");
                container.scrollTop = container.scrollHeight;
            }, 50);
        },
        sendMessage: function() {
            this.userContacts[this.contactIndex].messages.push(
                { // send new message
                    data: "10/01/2020 15:30:55",
                    message: this.newMessage,
                    status: "sent"
                }
            );
            this.newMessage = ""; // re-clear the input value
            this.scrollToEnd(); // scroll to btm
            // contact responde
            setTimeout(() => { // after 1 sec
                this.userContacts[this.contactIndex].messages.push(
                    { // received new message
                        data: "10/01/2020 15:30:55",
                        message: "ok",
                        status: "received"
                    }
                );
                this.scrollToEnd();
            }, 1000);

        },
        isNewMessageEmpty: function() {
            return this.newMessage == "";
            console.log(this.newMessage == "");
        },
        changeFocus: function() {
            if (this.searchFocus) {
                this.searchFocus = false;
            } else {
                this.searchFocus = true;
            }
        },
        changeVisibility: function() {
            let userSearch = this.searContact.toLowerCase();
            let chartNum = userSearch.length; // max number of chart to confront

            // FOR EVERY FILTERED CONTACT
            this.userContacts.forEach((currentContact, i) => {
                // GET FILTERED CONTACT NAME AND LOWERED IT
                let currentName = currentContact.name.toLowerCase();
                let parzialName = currentName.substring(0, chartNum); // current-name from 0 to max-chart

                // IF ARE NOT EQUAL --> NOT VISIBLE
                if (userSearch != parzialName) {
                    currentContact.visible = false;
                } else if (userSearch == parzialName) {
                    currentContact.visible = true;
                }
            });
        },
        isFilteredEmpty: function() {
            if (!this.filteredContacts.length) {
                return true;
            } else {
                return false;
            }
        },
    },
    mounted(){
        this.scrollToEnd();
    },
});
