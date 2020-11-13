var app = new Vue({ // VUE INSTANCE
    el: "#root",
    data: { // for var
        user: {
            name: "Marco",
            avatar: "_user.jpg"
        },
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
                        status: "send"
                    },
                    {
                        data: "10/01/2020 16:15:22",
                        message: "Tranquillo tutto ok, se ne parla domani...",
                        status: "received"
                    },
                    {
                        data: "10/01/2020 16:15:22",
                        message: "Ok fai ammodo",
                        status: "send"
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
                name: "Sofia",
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
                name: "Francesca",
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
                name: "Antonio",
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
        ]
    },
    methods: { // for function

    }


});
