// Cursor Glow
const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove",(e)=>{
    glow.style.left = e.clientX + "px";
    glow.style.top = e.clientY + "px";
});

// Particles
tsParticles.load("particles-js",{

    background:{
        color:"transparent"
    },

    fpsLimit:60,

    particles:{

        number:{
            value:70
        },

        color:{
            value:"#38bdf8"
        },

        links:{
            enable:true,
            distance:170,
            color:"#38bdf8",
            opacity:0.18,
            width:1
        },

        move:{
            enable:true,
            speed:1
        },

        opacity:{
            value:0.5
        },

        size:{
            value:{min:1,max:3}
        }

    },

    interactivity:{

        events:{
            onHover:{
                enable:true,
                mode:"grab"
            }
        },

        modes:{
            grab:{
                distance:180,
                links:{
                    opacity:0.5
                }
            }
        }

    }

});