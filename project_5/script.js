const tl = gsap.timeline({ repeat: -1 })

tl.to(
	".imgcontainer",
	{
		width: "100%",
		ease: Expo.easeInOut,
		duration: 2,
		stagger: 2,
	},
	"a"
)

	.to(
		".text h1",
		{
			ease: Expo.easeInOut,
			top: "0",
			duration: 2,
			stagger: 2,
		},
		"a"
	)

	.to(
		".text h1",
		{
			delay: 2,
			ease: Expo.easeInOut,
			top: "-100%",
			duration: 2,
			stagger: 2,
		},
		"a"
	)
