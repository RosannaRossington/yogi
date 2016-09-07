var mongoose = require('mongoose');
// var User = require('../models/user');
var Pose = require('../models/pose');

var databaseUri = require('../config/db')('development');
mongoose.connect(databaseUri);

// User.collection.drop();
Pose.collection.drop();

// User.create([
  
// ], function(err, users) {
  Pose.create([
    {
     name: "HALF TWIST POSE",
     translation: "Ardha Matsyendrasana",
     image: "http://1.bp.blogspot.com/-4S2L7HDgBxs/UYjfo4DwtlI/AAAAAAAAADU/Fd-1Foe8wVk/s1600/Ardhamatsyendarsana+%28Half+spinal+Twist%29.png",
     benefit: ["Increase spinal flexibility","Expand chest and shoulders","Relieves thoracic or mid back spinal tension.","Strengthen abdominal oblique muscles", "Stretches your hip rrotators and hip", "Detoxify your liver and kidneys and stimulate digestive fire"],
     caution: "Lumbar Disc Disorders - Keep your natural curve in the lower back and avoid rounding. Neck Problems - Gaze straight ahead with your head centereed on your body. Shoulder problems - Do not take the bind of the arms. Knee problems - Practice the straight leg version and avoid crossing the knee underneath you.",
     modification: "Binding the Arms – An advanced variation of the arm position is to move into a bind behind your back. Straight leg – You may also practice this pose with the underside of your leg straight. If you find you are tipping over, or rounding through your lower spine, you may take some height underneath the sitting bones. If your right elbow does not quite reach the outside of the thigh, you may keep your arm straight."
     
    },
    {  name: "REVOLVED CHAIR POSE",
     translation: "Parivrtta Utkatasana",
     image: "https://chadyoga.files.wordpress.com/2013/02/img023.jpg",
     benefit: ["Strengthen the hip flexor muscles, the front of your thighs, the adductor muscles of your inner thighs and the gluteos muscles of your hips","Strengthens and stretches your calf muscles","Opens your chest, shoulders, and upper back.","Improves the range of motion in your ankles.", "Increases proprioception (or the sense of position in space) in your feet.", "Traditionally thought to stimulate your abdominal organs and your heart."],
     caution: "Lumbar Back Pain - Maintain your natural lumbar curve. Stop before your low back flattens or rounds backwards. Continue to draw in the lower belly to support your spine. Shoulder injury - Only move within your pain-free range, stopping before your ribs jut forward, and keep the arms shoulder width apart. Neck Pain/Dizzy - Look straight ahead.",
     modification: "Struggling to keep your heels firmly rooted on the ground - fold or roll your mat a little. Avoid rounding the lumbar spine too far forward or back. Use a block between your thighs and hold between your legs as you move into the pose. Place a block on the ground for your lower arm if arms outstretched."
      
    },
    {name: "REVOLVED EXTENDED SIDE ANGLE POSE",
     translation: "Parivrtta Parsvakonasana",
     image: "http://img.gtvcdn.com/cdn/farfuture/ZdsMlgAYXJL4eRVCdJ7cy4vv2Nr4fAq7UxD0hliKIc8/mtime%3A1406237344/sites/default/files/imagecache/pose_guide_main/pose_extra_image/2-281-revolved-extended-side-angle-pose-parivrtta-parsvakonasana.jpg",
     benefit: ["Strengthen the shoulders, legs and feet","Tones the inner and outer muscles of the legs","Opens the hips and hip flexors", "Challenges your balance"],
     caution: "Avoid in the case of hip or pelvis injury. Keep both feet strong and connected to the ground.",
     modification: "Stay in the first prayer position for less intensity. In the full pose, stay on tented fingertips or place a block under your bottom hand. Practice this pose with a less intense twist such as Revolved Crescent Lunge."
    },
    {name: "REVOLVED LUNGE POSE",
     translation: "Parivrtta Anjaneyasana",
     image: "http://img.gtvcdn.com/cdn/farfuture/Hjz45Q3YnmnQQKrUPiLCCVk89TKdbZaJ742OymnmHnw/mtime%3A1406241072/sites/default/files/imagecache/pose_guide_main/pose_extra_image/127-revolved-lunge-pose-parivrtta-anjaneyasana.jpg",
     benefit: ["Strengthen the quadriceps and glueteus muscles", "Stimualates abdominal organs", "Improves digestion and elimination", "Stretches the psoas and hips", "Relieves sciatica pain", "Develops stamina and endurance in your thighs", "Improves your balance, concentraiton and core"],
     caution: "High or low blood pressure. Knee injuries. Spinal injuries.",
     modification: "Gaze downwards or forwards if you have a neck injury. Lower your back knee down to the gorund to lesson the intenisity of this pose."
    },
    {name: "REVOLVED TRIANGLE POSE",
     translation: "Parivrtta Trikonsana",
     image: "http://img.gtvcdn.com/cdn/farfuture/3hRN2l7oZd-zfiZzFgd2DF8vYEr31nvttqQT1D5rDsg/mtime%3A1406242813/sites/default/files/imagecache/pose_guide_main/pose_extra_image/70-revolved-triangle-pose-parivrtta-trikonasana.jpg",
     benefit: ["Expand your chest and shoulders", "Increase neck mobility", "Stretch your spinal muscles and increase range of motion", "Strengthen and tone your thigh muscles.", "Stretch your calf muscles, hamstrings and hips","Can relievve upper back tension", "Increases proprioception of you feet and ankles.", "Stimulate abdominal organs."],
     caution: "Neck Pain - Keep your head in line with the spine do not look over your shoulder. Low Back Pain - Hip points must face forward with your feet hip width apart. Turn the back foot forward to limit force toSacroiliac joint and twist through upper back. Low blood pressure - do not fold below horizontal to keep head level with the heart.",
     modification: "For shoulder tension keep the revolved side hand at the wait not to the sky. For calf tightness - roll up the mat to root the foot and decrease this height overtime. Think of leading the twist from your heart centre to increase the rotation, while keeping your lower ribs drawing in to gently engage the core."
      
    },
    { name: "THREAD THE NEEDLE POSE",
     translation: "Parsva Balasana",
     image: "http://img.gtvcdn.com/cdn/farfuture/jvnNdSuYZzJo0ewkrhN2hBcKBbA0P2rAmYVAv6NjnII/mtime%3A1406238591/sites/default/files/imagecache/pose_guide_main/pose_extra_image/203-thread-the-needle-pose-parsva-balasana.jpg",
     benefit: ["Gently compresses the muscles of you upper chest.", "Opens the upper and outer shoulder muscles.", "Detox and calm your body.", "Sends fresh blood to your upper extremities."],
     caution: "Neck Pain - avoid. Do not over twist if you have hip or back conditions.",
     modification: "Use a blanket to offer more support to your knees or shoulders. For a deeper twist, cross over your free arm over your lower back. Clasp your left leg with your right palm pressed into your quad. Hook your right finger around your inner thigh. "
      
    },
    { name: "TWO KNEE SPINAL TWIST POSE",
     translation: "Supta Matsyendrasana",
     image: "http://img.gtvcdn.com/cdn/farfuture/aRTL6YWBkeXHfszuMsVpMncUfki2kHk1gPA6-Hb8xCk/mtime%3A1406056751/sites/default/files/imagecache/pose_guide_main/pose_extra_image/12-two-knee-spinal-twist-pose.jpg",
     benefit: ["Encourage spine movement.", "Massage, stretch and tone your internal organs.", "Improve digestion.", "Stretch you chest, shoulders, lower back, hips, middle spine and upper back.", "Alleviates pain or stiggness in your lower back, spine and hips."],
     caution: "Severe lower back problems. Pregnancy - use a pillow between knees. Internal organ surgery.",
     modification: "If the knees do not rest easily on the ground, place your knees and feet on a large pillow. To deepen your twist, place your right hand on your left knee (closest hand) and press your knees down. To increase further, pull your knees up towards the under arm, but continue to keep your right shoulder from lifting off the ground. "
     
    }
  ], function(err, pose) {
    // console.log(users.length + " users created!");
    console.log(pose.length + " poses created!");

    mongoose.connection.close();
  });
})