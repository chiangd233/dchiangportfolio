import GITFITNOW from "../assets/GITFITNOW.png"
import BUNBUN from"../assets/BUNBUN.png"
import DefendtheTower from "../assets/DefendtheTower.png"
import RoadTrip from "../assets/RoadTrip.png"

export const ProjectList = [
    {
        name: "PIT STOP",
        image: RoadTrip,
        subtitle: "A Django React Application used to plan things to do while on a road trip. With full CRUD and using a custom Django user authentication."
    },
    {
        name: "GIT FIT NOW",
        image: GITFITNOW,
        subtitle: "A workout application with Full CRUD built on Django. Sign in and register capabilities using built in Django user authentication."
    },
    {
        name: "BUNBUN",
        image: BUNBUN,
        subtitle: "A recipe sharing application built on MEAN stack. Full CRUD capability and using Google OAuth as a form of authentication."
    },
    {
        name: "Defend the Tower! ",
        image: DefendtheTower,
        subtitle: "A simple clicking game created with basic HTML, CSS, and Javascript. Used several functions to determine win/lose condition, enemy spawn rate/speed, and splicing enemy accurately."
    }
]