var app = new Vue({ // VUE INSTANCE
    el: "#root",
    data: { // for var
        user: {
            name: "Marco",
            avatar: "_user.jpg"
        },
        userContacts: [ // all user-contacts
            {
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
                ] // END messages
            }, // END contact
            {
                name: "Paola",
                avatar: "_2.jpg",
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
                ] // END messages
            }, // END contact
            {
                name: "Francesco",
                avatar: "_3.jpg",
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
                ] // END messages
            }, // END contact
            {
                name: "Boolean",
                avatar: "_4.png",
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
                ] // END messages
            }, // END contact
            {
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
                ] // END messages
            }, // END contact
            {
                name: "Sofia",
                avatar: "_6.jpg",
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
                ] // END messages
            }, // END contact
            {
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
                ] // END messages
            }, // END contact
            {
                name: "Francesca",
                avatar: "_8.jpg",
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
                ] // END messages
            }, // END contact
            {
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
                ] // END messages
            }, // END contact
            {
                name: "Antonio",
                avatar: "_10.jpg",
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
                ] // END messages
            }, // END contact
        ]
    },
    methods: { // for function

    }


});
