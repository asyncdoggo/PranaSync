import { Link } from "react-router-dom"

export default function Poses() {
    const yogaPoses = [
        {
            pose: "mountain",
            description: "The foundation of all standing poses, Mountain Pose makes a great a starting position, resting pose, or tool to improve posture.",
            image: "mountain.png"
        },
        {
            pose: "tree",
            description: "Tree Pose stretches the thighs, groins, torso, and shoulders. It builds strength in the ankles and calves, and tones the abdominal muscles. The pose also helps to remedy flat feet and is therapeutic for sciatica.",
            image: "tree.png"
        },
        {
            pose: "warrior 1",
            description: "Warrior I is a standing lunge that deeply strengthens your legs and core. It also stretches your chest and shoulders, and opens your hips.",
            image: "warrior1.png"
        },
        {
            pose: "warrior 2",
            description: "Warrior II strengthens the legs, opens the hips and chest and shoulders, and stretches the groins, ankles and calves.",
            image: "warrior2.png"
        },
        {
            pose: "warrior 3",
            description: "Warrior III strengthens the legs and ankles, stretches the chest and shoulders, and improves balance and posture.",
            image: "warrior3.png"
        },
        {
            pose: "triangle",
            description: "Triangle Pose stretches the legs, hips, groin, shoulders, chest, spine and ankles. It also increases both physical and mental stability, and cultivates balance and concentration.",
            image: "triangle.png"
        },
        {
            pose: "half moon",
            description: "Half Moon Pose strengthens the abdomen, ankles, thighs, buttocks, and spine. It stretches the groins, hamstrings and calves, shoulders, chest, and spine.",
            image: "halfmoon.png"
        },
        {
            pose: "chair",
            description: "Chair Pose clearly works the muscles of the arms and legs, but it also stimulates the diaphragm and heart.",
            image: "chair.png"
        },
        {
            pose: "forward fold",
            description: "Forward Fold stretches the hamstrings, calves, and hips. It also strengthens the thighs and knees, and keeps your spine strong and flexible.",
            image: "forwardfold.png"
        },
        {
            pose: "downward dog",
            description: "Downward Dog stretches the shoulders, hamstrings, calves, arches, and hands. It strengthens the arms and legs, and helps relieve fatigue and sciatica.",
            image: "downwarddog.png"
        },
        {
            pose: "upward dog",
            description: "Upward-Facing Dog stretches the chest and lungs, shoulders and abdomen. It firms the buttocks, stimulates abdominal organs, and helps relieve mild depression, fatigue, and sciatica.",
            image: "upwarddog.png"
        },
        {
            pose: "plank",
            description: "Plank Pose strengthens the arms, wrists, and spine, and is known to be one of the best poses for core conditioning.",
            image: "plank.png"
        },
        {
            pose: "cobra",
            description: "Cobra Pose stretches the muscles in the shoulders, chest and abdominals. It also strengthens the arms and shoulders, and improves menstrual irregularities.",
            image: "cobra.png"
        },
        {
            pose: "child's pose",
            description: "Child's Pose gently stretches the hips, thighs, and ankles.",
            image: "childs.png"
        }
    ]
    
    
    return (
    <>
        <h1>Poses</h1>
        <div className="pose-list justify-center items-center flex flex-col">

            {
                yogaPoses.map((pose, index) => {
                    return (
                        
                        <Link className="w-full posecard flex flex-row justify-start items-center border hover:border-gray-400 hover:shadow-lg p-4 my-4 hover:cursor-pointer"
                         key={index}
                         to={`/pose/${pose.pose}`}>
                            <img src={pose.image} alt={pose.pose} className="w-1/4" />
                            <div className="w-3/4 flex flex-col justify-center items-center">
                                <h1 className="text-2xl font-bold self-start">{pose.pose}</h1>
                                <p className="text-md">{pose.description}</p>
                            </div>
                        </Link>
                    )
                })
            }
        </div>
    </>
    )
}