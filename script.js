const videos = ["video1.mp4", "video2.mp4", "video3.mp4", "video4.mp4"];
let currentVideo = 0;

async function loadData() {
    const response = await fetch('config.json');
    const data = await response.json();
    return data;
}

// config=0
const video3_25_0 = {
    "predictions": ["473-sled dog racing",
        "485-snowmobiling",
        "31-biking through snow",
        "538-tobogganing",
        "416-riding snow blower",
        "484-snowkiting",
        "466-skiing mono",
        "464-ski jumping",
        "253-lawn mower racing",
        "226-ice fishing"],
    "edgeMetrics": { "bandwdith" : 26.71,"latency": 40.29, "memory": 41.2 },
    "serverMetrics": { "latency": 19.21, "memory": 8.1, "overhead": 115.68}
};
const video2_25_0 = {
    "predictions": ["242-jumping jacks",
        "90-chopping wood",
        "432-sawing wood",
        "208-headbanging",
        "531-throwing snowballs",
        "388-pumping fist",
        "250-krumping",
        "142-doing aerobics",
        "71-cartwheeling",
        "468-skipping rope"],
    "edgeMetrics": { "bandwdith" : 26.71,"latency": 48.08, "memory": 40.8},
    "serverMetrics": { "latency": 18.50, "memory": 8.1, "overhead": 117.47}
};
const video1_25_0 = {
    "predictions": ["107-cooking egg",
        "437-separating eggs",
        "433-scrambling eggs",
        "81-changing oil",
        "110-cooking scallops",
        "190-frying vegetables",
        "109-cooking sausages (not on barbeque)",
        "183-flipping pancake",
        "573-washing dishes",
        "575-washing hair"],
    "edgeMetrics": { "bandwdith" : 26.71,"latency": 37.76, "memory": 38.9},
    "serverMetrics": { "latency": 23.52, "memory": 8.1, "overhead": 114.58}
};
const video4_25_0 = {
    "predictions": ["198-golf driving",
        "197-golf chipping",
        "205-hammer throw",
        "213-hitting baseball",
        "138-disc golfing",
        "509-swinging baseball bat",
        "556-using a sledge hammer",
        "199-golf putting",
        "78-catching or throwing softball",
        "488-spinning poi"],
    "edgeMetrics": { "bandwdith" : 26.71,"latency": 38.37, "memory": 39.2},
    "serverMetrics": { "latency": 24.71, "memory": 8.1, "overhead": 116.56}
};  
const bw25_0_options = [video1_25_0, video2_25_0, video3_25_0, video4_25_0]

const video3_6_0 = {
    "predictions": ["473-sled dog racing",
        "485-snowmobiling",
        "31-biking through snow",
        "538-tobogganing",
        "416-riding snow blower",
        "484-snowkiting",
        "466-skiing mono",
        "464-ski jumping",
        "253-lawn mower racing",
        "226-ice fishing"],
    "edgeMetrics": { "bandwdith" : 6.08,"latency": 40.42, "memory": 41.1 },
    "serverMetrics": { "latency": 21.81, "memory": 8.1, "overhead": 886.92}
};
const video2_6_0 = {
    "predictions": ["242-jumping jacks",
        "90-chopping wood",
        "432-sawing wood",
        "208-headbanging",
        "531-throwing snowballs",
        "388-pumping fist",
        "250-krumping",
        "142-doing aerobics",
        "71-cartwheeling",
        "468-skipping rope"],
    "edgeMetrics": { "bandwdith" : 6.08,"latency": 45.86, "memory": 40.7},
    "serverMetrics": { "latency": 18.82, "memory": 8.1, "overhead": 887.59}
};
const video1_6_0 = {
    "predictions": ["107-cooking egg",
        "437-separating eggs",
        "433-scrambling eggs",
        "81-changing oil",
        "110-cooking scallops",
        "190-frying vegetables",
        "109-cooking sausages (not on barbeque)",
        "183-flipping pancake",
        "573-washing dishes",
        "575-washing hair"],
    "edgeMetrics": { "bandwdith" : 6.08,"latency": 41.38, "memory": 38.9},
    "serverMetrics": { "latency":  19.36, "memory": 8.1, "overhead": 886.71}
};
const video4_6_0 = {
    "predictions": ["198-golf driving",
        "197-golf chipping",
        "205-hammer throw",
        "213-hitting baseball",
        "138-disc golfing",
        "509-swinging baseball bat",
        "556-using a sledge hammer",
        "199-golf putting",
        "78-catching or throwing softball",
        "488-spinning poi"],
    "edgeMetrics": { "bandwdith" : 6.08,"latency": 41.59, "memory": 39.2},
    "serverMetrics": { "latency": 23.47, "memory": 8.1, "overhead": 892.71}
};  
const bw6_0_options = [video1_6_0, video2_6_0, video3_6_0, video4_6_0]

const video3_3_0 = {
    "predictions": ["473-sled dog racing",
        "485-snowmobiling",
        "31-biking through snow",
        "538-tobogganing",
        "416-riding snow blower",
        "484-snowkiting",
        "466-skiing mono",
        "464-ski jumping",
        "253-lawn mower racing",
        "226-ice fishing"],
    "edgeMetrics": { "bandwdith" : 3.18, "latency": 37.08, "memory": 40.4 },
    "serverMetrics": { "latency": 27.14, "memory": 8.1, "overhead": 257.54}
};
const video2_3_0 = {
    "predictions": ["242-jumping jacks",
        "90-chopping wood",
        "432-sawing wood",
        "208-headbanging",
        "531-throwing snowballs",
        "388-pumping fist",
        "250-krumping",
        "142-doing aerobics",
        "71-cartwheeling",
        "468-skipping rope"],
    "edgeMetrics": { "bandwdith" : 3.18,"latency": 47.90, "memory": 38.6},
    "serverMetrics": { "latency":19.43, "memory": 8.1, "overhead": 488.49}
};
const video1_3_0 = {
    "predictions": ["107-cooking egg",
        "437-separating eggs",
        "433-scrambling eggs",
        "81-changing oil",
        "110-cooking scallops",
        "190-frying vegetables",
        "109-cooking sausages (not on barbeque)",
        "183-flipping pancake",
        "573-washing dishes",
        "575-washing hair"],
    "edgeMetrics": { "bandwdith" : 3.18,"latency": 35.15, "memory": 39.2},
    "serverMetrics": { "latency":  23.51, "memory": 8.1, "overhead": 835.52}
};
const video4_3_0 = {
    "predictions": ["198-golf driving",
        "197-golf chipping",
        "205-hammer throw",
        "213-hitting baseball",
        "138-disc golfing",
        "509-swinging baseball bat",
        "556-using a sledge hammer",
        "199-golf putting",
        "78-catching or throwing softball",
        "488-spinning poi"],
    "edgeMetrics": { "bandwdith" : 3.18,"latency": 38.90, "memory": 39.3},
    "serverMetrics": { "latency": 31.31, "memory": 8.1, "overhead": 2594.98}
};  
const bw3_0_options = [video1_3_0, video2_3_0, video3_3_0, video4_3_0]

// config=1
const video3_25_1 = {
    "predictions": ["31-biking through snow",
        "485-snowmobiling",
        "473-sled dog racing",
        "538-tobogganing",
        "484-snowkiting",
        "464-ski jumping",
        "292-motorcycling",
        "416-riding snow blower",
        "466-skiing mono",        
        "235-jetskiing"],
    "edgeMetrics": { "bandwdith" : 24.07,"latency": 77.97, "memory": 41.2 },
    "serverMetrics": { "latency": 14.13, "memory": 6.0, "overhead": 53.29}
};
const video2_25_1 = {
    "predictions": ["242-jumping jacks",
        "250-krumping",
        "208-headbanging",
        "291-mosh pit dancing",
        "131-dancing gangnam style",
        "388-pumping fist",
        "599-zumba",
        "391-punching person (boxing)",
        "243-jumpstyle dancing",
        "211-high kick"],
    "edgeMetrics": { "bandwdith" : 24.07,"latency": 73.17, "memory": 40.9 },
    "serverMetrics": { "latency": 16.0, "memory": 6.0, "overhead": 54.23}
};
const video1_25_1 = {
    "predictions": ["107-cooking egg",
        "437-separating eggs",
        "433-scrambling eggs",
        "80-changing gear in car",
        "81-changing oil",
        "190-frying vegetables",
        "149-driving car",
        "110-cooking scallops",
        "183-flipping pancake",
        "279-making tea"],
    "edgeMetrics": { "bandwdith" : 24.07,"latency": 81.78, "memory": 39.0 },
    "serverMetrics": { "latency": 16.18, "memory": 6.0, "overhead": 53.34}
};
const video4_25_1 = {
    "predictions": ["198-golf driving",
        "197-golf chipping",
        "205-hammer throw",
        "213-hitting baseball",
        "199-golf putting",
        "509-swinging baseball bat",
        "309-passing american football (not in game)",
        "488-spinning poi",
        "124-cutting apple",
        "74-casting fishing line"],
    "edgeMetrics": { "bandwdith" : 24.07,"latency":  83.52, "memory": 39.3 },
    "serverMetrics": { "latency": 16.20, "memory": 6.0, "overhead":53.23}
};  
const bw25_1_options = [video1_25_1, video2_25_1, video3_25_1, video4_25_1]

const video3_6_1 = {
    "predictions": ["31-biking through snow",
        "485-snowmobiling",
        "473-sled dog racing",
        "538-tobogganing",
        "484-snowkiting",
        "464-ski jumping",
        "292-motorcycling",
        "416-riding snow blower",
        "466-skiing mono",        
        "235-jetskiing"],
    "edgeMetrics": { "bandwdith" : 6.05,"latency": 79.37, "memory": 39.1 },
    "serverMetrics": { "latency": 15.89, "memory": 6.1, "overhead": 219.58}
};
const video2_6_1 = {
    "predictions": ["242-jumping jacks",
        "250-krumping",
        "208-headbanging",
        "291-mosh pit dancing",
        "131-dancing gangnam style",
        "388-pumping fist",
        "599-zumba",
        "391-punching person (boxing)",
        "243-jumpstyle dancing",
        "211-high kick"],
    "edgeMetrics": { "bandwdith" : 6.05,"latency": 77.57, "memory": 39.7 },
    "serverMetrics": { "latency": 16.09, "memory": 6.1, "overhead": 219.35}
};
const video1_6_1 = {
    "predictions": ["107-cooking egg",
        "437-separating eggs",
        "433-scrambling eggs",
        "80-changing gear in car",
        "81-changing oil",
        "190-frying vegetables",
        "149-driving car",
        "110-cooking scallops",
        "183-flipping pancake",
        "279-making tea"],
    "edgeMetrics": { "bandwdith" : 6.05,"latency": 100.98, "memory":37.1},
    "serverMetrics": { "latency": 14.01, "memory": 6.1, "overhead": 218.10}
};
const video4_6_1 = {
    "predictions": ["198-golf driving",
        "197-golf chipping",
        "205-hammer throw",
        "213-hitting baseball",
        "199-golf putting",
        "509-swinging baseball bat",
        "309-passing american football (not in game)",
        "488-spinning poi",
        "124-cutting apple",
        "74-casting fishing line"],
    "edgeMetrics": { "bandwdith" : 6.05,"latency": 77.10, "memory":37.4},
    "serverMetrics": { "latency": 14.34, "memory": 6.1, "overhead": 219.89}
};  
const bw6_1_options = [video1_6_1, video2_6_1, video3_6_1, video4_6_1]

const video3_3_1 = {
    "predictions": ["31-biking through snow",
        "485-snowmobiling",
        "473-sled dog racing",
        "538-tobogganing",
        "484-snowkiting",
        "464-ski jumping",
        "292-motorcycling",
        "416-riding snow blower",
        "466-skiing mono",        
        "235-jetskiing"],
    "edgeMetrics": { "bandwdith" : 2.84, "latency": 81.01, "memory": 39.4 },
    "serverMetrics": { "latency": 14.82, "memory": 6.1, "overhead": 437.15}
};
const video2_3_1 = {
    "predictions": ["242-jumping jacks",
        "250-krumping",
        "208-headbanging",
        "291-mosh pit dancing",
        "131-dancing gangnam style",
        "388-pumping fist",
        "599-zumba",
        "391-punching person (boxing)",
        "243-jumpstyle dancing",
        "211-high kick"],
    "edgeMetrics": { "bandwdith" : 2.84, "latency": 86.66, "memory": 39.0},
    "serverMetrics": { "latency": 16.03, "memory": 6.1, "overhead": 441.59}
};
const video1_3_1 = {
    "predictions": ["107-cooking egg",
        "437-separating eggs",
        "433-scrambling eggs",
        "80-changing gear in car",
        "81-changing oil",
        "190-frying vegetables",
        "149-driving car",
        "110-cooking scallops",
        "183-flipping pancake",
        "279-making tea"],
    "edgeMetrics": { "bandwdith" : 2.84, "latency": 78.99, "memory": 37.1 },
    "serverMetrics": { "latency": 14.90, "memory": 6.1, "overhead": 436.38}
};
const video4_3_1 = {
    "predictions": ["198-golf driving",
        "197-golf chipping",
        "205-hammer throw",
        "213-hitting baseball",
        "199-golf putting",
        "509-swinging baseball bat",
        "309-passing american football (not in game)",
        "488-spinning poi",
        "124-cutting apple",
        "74-casting fishing line"],
    "edgeMetrics": { "bandwdith" : 2.84, "latency":80.81, "memory": 37.4},
    "serverMetrics": { "latency": 13.94, "memory": 6.1, "overhead": 444.06}
};  
const bw3_1_options = [video1_3_1, video2_3_1, video3_3_1, video4_3_1]

// config=2
const video3_25_2 = {
    "predictions": ["473-sled dog racing",
        "485-snowmobiling",
        "31-biking through snow",
        "538-tobogganing",
        "484-snowkiting",
        "416-riding snow blower",
        "266-luge",
        "235-jetskiing",        
        "464-ski jumping",
        "466-skiing mono",
        ],
    "edgeMetrics": { "bandwdith" : 25.04,"latency":47.54, "memory": 40.6},
    "serverMetrics": { "latency": 21.84, "memory": 8.0, "overhead": 57.47}
};
const video2_25_2 = {
    "predictions": ["242-jumping jacks",
        "90-chopping wood",
        "432-sawing wood",
        "291-mosh pit dancing",
        "208-headbanging",
        "250-krumping",
        "531-throwing snowballs",
        "388-pumping fist",
        "66-capoeira",
        "142-doing aerobics",],
    "edgeMetrics": { "bandwdith" : 25.04,"latency": 38.92, "memory":41.2},
    "serverMetrics": { "latency": 24.57, "memory": 8.0, "overhead": 55.81}
};
const video1_25_2 = {
    "predictions": ["107-cooking egg",
        "437-separating eggs",
        "433-scrambling eggs",
        "81-changing oil",
        "110-cooking scallops",
        "190-frying vegetables",
        "109-cooking sausages (not on barbeque)",
        "80-changing gear in car",
        "575-washing hair",
        "226-ice fishing"],
    "edgeMetrics": { "bandwdith" : 25.04,"latency":48.89, "memory": 38.5},
    "serverMetrics": { "latency": 22.17, "memory": 8.0, "overhead": 57.69}
};
const video4_25_2 = {
    "predictions": ["198-golf driving",
        "197-golf chipping",
        "199-golf putting",
        "205-hammer throw",
        "213-hitting baseball",
        "509-swinging baseball bat",
        "138-disc golfing",
        "124-cutting apple",
        "74-casting fishing line",
        "488-spinning poi"],
    "edgeMetrics": { "bandwdith" : 25.04,"latency":37.76, "memory": 38.8},
    "serverMetrics": { "latency": 22.75, "memory": 8.0, "overhead": 57.43}
};  
const bw25_2_options = [video1_25_2, video2_25_2, video3_25_2, video4_25_2]

const video3_6_2 = {
    "predictions": ["473-sled dog racing",
        "485-snowmobiling",
        "31-biking through snow",
        "538-tobogganing",
        "484-snowkiting",
        "416-riding snow blower",
        "266-luge",
        "235-jetskiing",        
        "464-ski jumping",
        "466-skiing mono",
        ],
    "edgeMetrics": { "bandwdith" : 6.06,"latency": 37.70, "memory": 40.8 },
    "serverMetrics": { "latency": 32.75, "memory": 7.9, "overhead": 442.31}
};
const video2_6_2 = {
    "predictions": ["242-jumping jacks",
        "90-chopping wood",
        "432-sawing wood",
        "291-mosh pit dancing",
        "208-headbanging",
        "250-krumping",
        "531-throwing snowballs",
        "388-pumping fist",
        "66-capoeira",
        "142-doing aerobics",],
    "edgeMetrics": { "bandwdith" : 6.06,"latency": 42.78, "memory": 41.3 },
    "serverMetrics": { "latency": 22.53, "memory": 8.0, "overhead": 443.28}
};
const video1_6_2 = {
    "predictions": ["107-cooking egg",
        "437-separating eggs",
        "433-scrambling eggs",
        "81-changing oil",
        "110-cooking scallops",
        "190-frying vegetables",
        "109-cooking sausages (not on barbeque)",
        "80-changing gear in car",
        "575-washing hair",
        "226-ice fishing"],
    "edgeMetrics": { "bandwdith" : 6.06,"latency": 46.79, "memory": 38.6},
    "serverMetrics": { "latency": 21.11, "memory": 8.0, "overhead": 441.72}
};
const video4_6_2 = {
    "predictions": ["198-golf driving",
        "197-golf chipping",
        "199-golf putting",
        "205-hammer throw",
        "213-hitting baseball",
        "509-swinging baseball bat",
        "138-disc golfing",
        "124-cutting apple",
        "74-casting fishing line",
        "488-spinning poi"],
    "edgeMetrics": { "bandwdith" : 6.06,"latency": 46.39, "memory": 38.8 },
    "serverMetrics": { "latency": 21.79, "memory": 8.0, "overhead": 443.20}
};  
const bw6_2_options = [video1_6_2, video2_6_2, video3_6_2, video4_6_2]

const video3_3_2 = {
    "predictions": ["473-sled dog racing",
        "485-snowmobiling",
        "31-biking through snow",
        "538-tobogganing",
        "484-snowkiting",
        "416-riding snow blower",
        "266-luge",
        "235-jetskiing",        
        "464-ski jumping",
        "466-skiing mono",
        ],
    "edgeMetrics": { "bandwdith" : 2.80, "latency": 37.23, "memory": 40.9 },
    "serverMetrics": { "latency": 22.31, "memory": 7.9, "overhead": 881.61}
};
const video2_3_2 = {
    "predictions": ["242-jumping jacks",
        "90-chopping wood",
        "432-sawing wood",
        "291-mosh pit dancing",
        "208-headbanging",
        "250-krumping",
        "531-throwing snowballs",
        "388-pumping fist",
        "66-capoeira",
        "142-doing aerobics",],
    "edgeMetrics": { "bandwdith" : 2.80, "latency": 46.70, "memory": 40.5},
    "serverMetrics": { "latency": 30.07, "memory": 8.0, "overhead": 880.35}
};
const video1_3_2 = {
    "predictions": ["107-cooking egg",
        "437-separating eggs",
        "433-scrambling eggs",
        "81-changing oil",
        "110-cooking scallops",
        "190-frying vegetables",
        "109-cooking sausages (not on barbeque)",
        "80-changing gear in car",
        "575-washing hair",
        "226-ice fishing"],
    "edgeMetrics": { "bandwdith" : 2.80, "latency": 40.14, "memory":38.8},
    "serverMetrics": { "latency": 32.18, "memory": 8.0, "overhead": 879.41}
};
const video4_3_2 = {
   "predictions": ["198-golf driving",
        "197-golf chipping",
        "199-golf putting",
        "205-hammer throw",
        "213-hitting baseball",
        "509-swinging baseball bat",
        "138-disc golfing",
        "124-cutting apple",
        "74-casting fishing line",
        "488-spinning poi"],
    "edgeMetrics": { "bandwdith" : 2.80, "latency": 40.50, "memory":39.0 },
    "serverMetrics": { "latency": 24.32, "memory": 8.0, "overhead": 890.01}
};  
const bw3_2_options = [video1_3_2, video2_3_2, video3_3_2, video4_3_2]

// config=3
const video3_25_3 = {
    "predictions": ["31-biking through snow",
        "473-sled dog racing",
        "485-snowmobiling",
        "416-riding snow blower",
        "484-snowkiting",        
        "538-tobogganing",   
        "466-skiing mono",
        "292-motorcycling",
        "465-skiing crosscountry",
        "464-ski jumping"],
    "edgeMetrics": { "bandwdith" : 26.01,"latency": 77.07, "memory": 39.8},
    "serverMetrics": { "latency": 16.58, "memory":6.1, "overhead": 14.17}
};
const video2_25_3 = {
    "predictions": ["242-jumping jacks",
        "250-krumping",
        "208-headbanging",
        "291-mosh pit dancing",
        "211-high kick",
        "388-pumping fist",
        "346-playing hand clapping games",
        "515-tai chi",
        "531-throwing snowballs",
        "391-punching person (boxing)"],
    "edgeMetrics": { "bandwdith" : 26.01,"latency": 99.97, "memory": 38.8},
    "serverMetrics": { "latency": 18.01, "memory":6.1, "overhead": 12.97}
};
const video1_25_3 = {
    "predictions": ["107-cooking egg",
        "437-separating eggs",
        "433-scrambling eggs",
        "81-changing oil",
        "110-cooking scallops",
        "190-frying vegetables",
        "311-peeling apples",
        "279-making tea",
        "81-changing oil",
        "312-peeling potatoes",
        "109-cooking sausages (not on barbeque)"],
    "edgeMetrics": { "bandwdith" : 26.01,"latency": 77.84, "memory": 37.8},
    "serverMetrics": { "latency": 15.95, "memory":6.1, "overhead": 13.65}
};
const video4_25_3 = {
    "predictions": ["198-golf driving",
        "197-golf chipping",
        "205-hammer throw",
        "556-using a sledge hammer",
        "488-spinning poi",
        "509-swinging baseball bat",
        "213-hitting baseball",
        "199-golf putting",
        "309-passing american football (not in game)",
        "527-throwing axe"],
    "edgeMetrics": { "bandwdith" : 26.01,"latency": 73.92, "memory": 38.0},
    "serverMetrics": { "latency": 19.45, "memory":6.1, "overhead": 12.87}
};  
const bw25_3_options = [video1_25_3, video2_25_3, video3_25_3, video4_25_3]

const video3_6_3 = {
    "predictions": ["31-biking through snow",
        "473-sled dog racing",
        "485-snowmobiling",
        "416-riding snow blower",
        "484-snowkiting",        
        "538-tobogganing",   
        "466-skiing mono",
        "292-motorcycling",
        "465-skiing crosscountry",
        "464-ski jumping"],
    "edgeMetrics": { "bandwdith" :6.05,"latency": 75.97, "memory": 39.5},
    "serverMetrics": { "latency": 21.17, "memory": 6.1, "overhead":106.24}
};
const video2_6_3 = {
    "predictions": ["242-jumping jacks",
        "250-krumping",
        "208-headbanging",
        "291-mosh pit dancing",
        "211-high kick",
        "388-pumping fist",
        "346-playing hand clapping games",
        "515-tai chi",
        "531-throwing snowballs",
        "391-punching person (boxing)"],
    "edgeMetrics": { "bandwdith" :6.05,"latency": 92.55, "memory": 39.1},
    "serverMetrics": { "latency": 15.09, "memory": 6.1, "overhead": 108.57}
};
const video1_6_3 = {
    "predictions": ["107-cooking egg",
        "437-separating eggs",
        "433-scrambling eggs",
        "81-changing oil",
        "110-cooking scallops",
        "190-frying vegetables",
        "311-peeling apples",
        "279-making tea",
        "81-changing oil",
        "312-peeling potatoes",
        "109-cooking sausages (not on barbeque)"],
    "edgeMetrics": { "bandwdith" :6.05,"latency": 74.95, "memory": 37.2},
    "serverMetrics": { "latency": 15.38, "memory": 6.1, "overhead":109.24}
};
const video4_6_3 = {
    "predictions": ["198-golf driving",
        "197-golf chipping",
        "205-hammer throw",
        "556-using a sledge hammer",
        "488-spinning poi",
        "509-swinging baseball bat",
        "213-hitting baseball",
        "199-golf putting",
        "309-passing american football (not in game)",
        "527-throwing axe"],
    "edgeMetrics": { "bandwdith" :6.05,"latency": 101.10, "memory": 37.5},
    "serverMetrics": { "latency": 19.49, "memory": 6.1, "overhead":107.42}
};  
const bw6_3_options = [video1_6_3, video2_6_3, video3_6_3, video4_6_3]

const video3_3_3 = {
    "predictions": ["31-biking through snow",
        "473-sled dog racing",
        "485-snowmobiling",
        "416-riding snow blower",
        "484-snowkiting",        
        "538-tobogganing",   
        "466-skiing mono",
        "292-motorcycling",
        "465-skiing crosscountry",
        "464-ski jumping"],
    "edgeMetrics": { "bandwdith" : 3.13, "latency": 76.46, "memory": 39.6 },
    "serverMetrics": { "latency": 17.38, "memory": 6.1, "overhead": 213.24}
};
const video2_3_3 = {
    "predictions": ["242-jumping jacks",
        "250-krumping",
        "208-headbanging",
        "291-mosh pit dancing",
        "211-high kick",
        "388-pumping fist",
        "346-playing hand clapping games",
        "515-tai chi",
        "531-throwing snowballs",
        "391-punching person (boxing)"],
    "edgeMetrics": { "bandwdith" : 3.13, "latency": 80.56, "memory": 39.3},
    "serverMetrics": { "latency": 17.33, "memory": 6.1, "overhead": 213.53}
};
const video1_3_3 = {
    "predictions": ["107-cooking egg",
        "437-separating eggs",
        "433-scrambling eggs",
        "81-changing oil",
        "110-cooking scallops",
        "190-frying vegetables",
        "311-peeling apples",
        "279-making tea",
        "81-changing oil",
        "312-peeling potatoes",
        "109-cooking sausages (not on barbeque)"],
    "edgeMetrics": { "bandwdith" : 3.13, "latency": 82.66, "memory": 37.4 },
    "serverMetrics": { "latency": 15.39, "memory": 6.1, "overhead": 214.93}
};
const video4_3_3 = {
    "predictions": ["198-golf driving",
        "197-golf chipping",
        "205-hammer throw",
        "556-using a sledge hammer",
        "488-spinning poi",
        "509-swinging baseball bat",
        "213-hitting baseball",
        "199-golf putting",
        "309-passing american football (not in game)",
        "527-throwing axe"],
    "edgeMetrics": { "bandwdith" : 3.13, "latency": 78.86, "memory": 37.7 },
    "serverMetrics": { "latency": 16.61, "memory": 6.1, "overhead": 215.49}
};  
const bw3_3_options = [video1_3_3, video2_3_3, video3_3_3, video4_3_3]

// config=4
const video3_25_4 = {
    "predictions": ["31-biking through snow",
        "473-sled dog racing",
        "485-snowmobiling",        
        "538-tobogganing",
        "416-riding snow blower",
        "466-skiing mono",
        "235-jetskiing",
        "454-shoveling snow",
        "253-lawn mower racing",
        "484-snowkiting"],
    "edgeMetrics": { "bandwdith" : 24.84,"latency": 76.72, "memory":39.7 },
    "serverMetrics": { "latency": 9.18, "memory":  6.2, "overhead": 233.24}
};
const video2_25_4 = {
    "predictions": ["242-jumping jacks",
        "250-krumping",
        "291-mosh pit dancing",
        "208-headbanging",
        "388-pumping fist",
        "131-dancing gangnam style",
        "492-squat",
        "84-cheerleading",
        "217-hopscotch",
        "599-zumba"],
    "edgeMetrics": { "bandwdith" : 24.84,"latency": 102.08, "memory": 39.4},
    "serverMetrics": { "latency": 9.23, "memory": 6.2, "overhead": 233.19}
};
const video1_25_4 = {
    "predictions": ["437-separating eggs",
        "107-cooking egg",        
        "433-scrambling eggs",
        "110-cooking scallops",
        "312-peeling potatoes",
        "190-frying vegetables",
        "109-cooking sausages (not on barbeque)",
        "311-peeling apples",
        "279-making tea",
        "268-making a cake"],
    "edgeMetrics": { "bandwdith" : 24.84,"latency": 74.58, "memory": 37.5},
    "serverMetrics": { "latency": 9.02, "memory": 6.2, "overhead": 232.25}
};
const video4_25_4 = {
    "predictions": ["198-golf driving",
        "197-golf chipping",
        "199-golf putting",
        "205-hammer throw",
        "309-passing american football (not in game)",        
        "213-hitting baseball",
        "481-sneezing",
        "528-throwing ball (not baseball or American football)",
        "124-cutting apple",
        "509-swinging baseball bat"],
    "edgeMetrics": { "bandwdith" : 24.84,"latency": 77.83, "memory": 37.8},
    "serverMetrics": { "latency": 9.58, "memory": 6.2, "overhead": 233.09}
};  
const bw25_4_options = [video1_25_4, video2_25_4, video3_25_4, video4_25_4]

const video3_6_4 = {
    "predictions": ["31-biking through snow",
        "473-sled dog racing",
        "485-snowmobiling",        
        "538-tobogganing",
        "416-riding snow blower",
        "466-skiing mono",
        "235-jetskiing",
        "454-shoveling snow",
        "253-lawn mower racing",
        "484-snowkiting"],
    "edgeMetrics": { "bandwdith" : 6.05,"latency": 76.25, "memory": 39.7 },
    "serverMetrics": { "latency": 12.45, "memory":  6.2, "overhead": 218.36}
};
const video2_6_4 = {
    "predictions": ["242-jumping jacks",
        "250-krumping",
        "291-mosh pit dancing",
        "208-headbanging",
        "388-pumping fist",
        "131-dancing gangnam style",
        "492-squat",
        "84-cheerleading",
        "217-hopscotch",
        "599-zumba"],
    "edgeMetrics": { "bandwdith" : 6.05,"latency": 84.62, "memory":39.2},
    "serverMetrics": { "latency": 9.57, "memory":  6.2, "overhead": 276.57}
};
const video1_6_4 = {
    "predictions": ["437-separating eggs",
        "107-cooking egg",        
        "433-scrambling eggs",
        "110-cooking scallops",
        "312-peeling potatoes",
        "190-frying vegetables",
        "109-cooking sausages (not on barbeque)",
        "311-peeling apples",
        "279-making tea",
        "268-making a cake"],
    "edgeMetrics": { "bandwdith" : 6.05,"latency":80.60, "memory": 37.6 },
    "serverMetrics": { "latency": 10.60, "memory":  6.2, "overhead": 489.34}
};
const video4_6_4 = {
    "predictions": ["198-golf driving",
        "197-golf chipping",
        "199-golf putting",
        "205-hammer throw",
        "309-passing american football (not in game)",        
        "213-hitting baseball",
        "481-sneezing",
        "528-throwing ball (not baseball or American football)",
        "124-cutting apple",
        "509-swinging baseball bat"],
    "edgeMetrics": { "bandwdith" : 6.05,"latency": 78.71, "memory": 37.8 },
    "serverMetrics": { "latency": 10.03, "memory":  6.2, "overhead": 2241.21}
};  
const bw6_4_options = [video1_6_4, video2_6_4, video3_6_4, video4_6_4]

const video3_3_4 = {
    "predictions": ["31-biking through snow",
        "473-sled dog racing",
        "485-snowmobiling",        
        "538-tobogganing",
        "416-riding snow blower",
        "466-skiing mono",
        "235-jetskiing",
        "454-shoveling snow",
        "253-lawn mower racing",
        "484-snowkiting"],
    "edgeMetrics": { "bandwdith" : 2.70, "latency": 86.35, "memory": 39.7 },
    "serverMetrics": { "latency": 9.27, "memory": 6.2, "overhead": 482.19}
};
const video2_3_4 = {
    "predictions": ["242-jumping jacks",
        "250-krumping",
        "291-mosh pit dancing",
        "208-headbanging",
        "388-pumping fist",
        "131-dancing gangnam style",
        "492-squat",
        "84-cheerleading",
        "217-hopscotch",
        "599-zumba"],
    "edgeMetrics": { "bandwdith" : 2.70, "latency": 96.71, "memory": 39.3 },
    "serverMetrics": { "latency": 14.12, "memory": 6.2, "overhead": 4007.22}
};
const video1_3_4 = {
    "predictions": ["437-separating eggs",
        "107-cooking egg",        
        "433-scrambling eggs",
        "110-cooking scallops",
        "312-peeling potatoes",
        "190-frying vegetables",
        "109-cooking sausages (not on barbeque)",
        "311-peeling apples",
        "279-making tea",
        "268-making a cake"],
    "edgeMetrics": { "bandwdith" : 2.70, "latency": 79.40, "memory": 37.5 },
    "serverMetrics": { "latency": 9.70, "memory": 6.2, "overhead": 7516.38}
};
const video4_3_4 = {
    "predictions": ["198-golf driving",
        "197-golf chipping",
        "199-golf putting",
        "205-hammer throw",
        "309-passing american football (not in game)",        
        "213-hitting baseball",
        "481-sneezing",
        "528-throwing ball (not baseball or American football)",
        "124-cutting apple",
        "509-swinging baseball bat"],
    "edgeMetrics": { "bandwdith" : 2.70, "latency": 74.04, "memory": 37.7},
    "serverMetrics": { "latency": 13.22, "memory": 6.2, "overhead": 11015.64}
};  
const bw3_4_options = [video1_3_4, video2_3_4, video3_3_4, video4_3_4]

// config=5
const video3_25_5 = {
    "predictions": ["31-biking through snow",
        "473-sled dog racing",
        "485-snowmobiling",        
        "538-tobogganing",
        "416-riding snow blower",
        "235-jetskiing",
        "466-skiing mono",        
        "454-shoveling snow",
        "235-jetskiing",
        "464-ski jumping"],
    "edgeMetrics": { "bandwdith" : 24.24,"latency": 77.12, "memory": 37.5 },
    "serverMetrics": { "latency": 11.56, "memory":  6.2, "overhead": 116.25}
};
const video2_25_5 = {
    "predictions": ["242-jumping jacks",
        "250-krumping",
        "291-mosh pit dancing",
        "599-zumba",
        "515-tai chi",
        "208-headbanging",
        "142-doing aerobics",
        "388-pumping fist",
        "492-squat",
        "84-cheerleading"],
    "edgeMetrics": { "bandwdith" : 24.24,"latency": 80.29, "memory":  37.8 },
    "serverMetrics": { "latency": 11.89, "memory":  6.2, "overhead": 118.32}
};
const video1_25_5 = {
    "predictions": ["437-separating eggs",
        "107-cooking egg",        
        "433-scrambling eggs",
        "110-cooking scallops",
        "312-peeling potatoes",
        "311-peeling apples",
        "190-frying vegetables",
        "183-flipping pancake",
        "109-cooking sausages (not on barbeque)",
        "268-making a cake"],
    "edgeMetrics": { "bandwdith" : 24.24,"latency": 72.70, "memory": 39.6},
    "serverMetrics": { "latency": 11.18, "memory":  6.2, "overhead": 116.76}
};
const video4_25_5 = {
    "predictions": ["198-golf driving",
        "197-golf chipping",
        "199-golf putting",
        "205-hammer throw",
        "509-swinging baseball bat",
        "213-hitting baseball",
        "124-cutting apple",
        "488-spinning poi",
        "366-playing polo",
        "528-throwing ball (not baseball or American football)"],
    "edgeMetrics": { "bandwdith" : 24.24,"latency": 81.06, "memory": 39.1 },
    "serverMetrics": { "latency": 13.80, "memory":  6.2, "overhead": 115.75}
};  
const bw25_5_options = [video1_25_5, video2_25_5, video3_25_5, video4_25_5]

const video3_6_5 = {
    "predictions": ["31-biking through snow",
        "473-sled dog racing",
        "485-snowmobiling",        
        "538-tobogganing",
        "416-riding snow blower",
        "235-jetskiing",
        "466-skiing mono",        
        "454-shoveling snow",
        "235-jetskiing",
        "464-ski jumping"],
    "edgeMetrics": { "bandwdith" : 5.60,"latency": 73.51, "memory": 39.6 },
    "serverMetrics": { "latency": 11.87, "memory":  6.2, "overhead": 886.69}
};
const video2_6_5 = {
    "predictions": ["242-jumping jacks",
        "250-krumping",
        "291-mosh pit dancing",
        "599-zumba",
        "515-tai chi",
        "208-headbanging",
        "142-doing aerobics",
        "388-pumping fist",
        "492-squat",
        "84-cheerleading"],
    "edgeMetrics": { "bandwdith" : 5.60,"latency": 90.38, "memory": 39.2},
    "serverMetrics": { "latency": 11.73, "memory":  6.2, "overhead": 884.80}
};
const video1_6_5 = {
   "predictions": ["437-separating eggs",
        "107-cooking egg",        
        "433-scrambling eggs",
        "110-cooking scallops",
        "312-peeling potatoes",
        "311-peeling apples",
        "190-frying vegetables",
        "183-flipping pancake",
        "109-cooking sausages (not on barbeque)",
        "268-making a cake"],
    "edgeMetrics": { "bandwdith" : 5.60,"latency": 79.65, "memory": 37.4 },
    "serverMetrics": { "latency": 12.11, "memory":  6.2, "overhead": 886.90}
};
const video4_6_5 = {
    "predictions": ["198-golf driving",
        "197-golf chipping",
        "199-golf putting",
        "205-hammer throw",
        "509-swinging baseball bat",
        "213-hitting baseball",
        "124-cutting apple",
        "488-spinning poi",
        "366-playing polo",
        "528-throwing ball (not baseball or American football)"],
    "edgeMetrics": { "bandwdith" : 5.60,"latency": 80.19, "memory": 37.6},
    "serverMetrics": { "latency": 11.00, "memory":  6.2, "overhead": 889.77}
};  
const bw6_5_options = [video1_6_5, video2_6_5, video3_6_5, video4_6_5]

const video3_3_5 = {
    "predictions": ["31-biking through snow",
        "473-sled dog racing",
        "485-snowmobiling",        
        "538-tobogganing",
        "416-riding snow blower",
        "235-jetskiing",
        "466-skiing mono",        
        "454-shoveling snow",
        "235-jetskiing",
        "464-ski jumping"],
    "edgeMetrics": { "bandwdith" : 2.62, "latency": 79.72, "memory": 39.7 },
    "serverMetrics": { "latency": 15.38, "memory": 6.2, "overhead": 53.24}
};
const video2_3_5 = {
    "predictions": ["242-jumping jacks",
        "250-krumping",
        "291-mosh pit dancing",
        "599-zumba",
        "515-tai chi",
        "208-headbanging",
        "142-doing aerobics",
        "388-pumping fist",
        "492-squat",
        "84-cheerleading"],
    "edgeMetrics": { "bandwdith" : 2.62, "latency": 104.72, "memory": 38.7 },
    "serverMetrics": { "latency": 11.33, "memory": 6.2, "overhead":  165.93}
};
const video1_3_5 = {
    "predictions": ["437-separating eggs",
        "107-cooking egg",        
        "433-scrambling eggs",
        "110-cooking scallops",
        "312-peeling potatoes",
        "311-peeling apples",
        "190-frying vegetables",
        "183-flipping pancake",
        "109-cooking sausages (not on barbeque)",
        "268-making a cake"],
    "edgeMetrics": { "bandwdith" : 2.62, "latency": 73.97, "memory": 37.5},
    "serverMetrics": { "latency": 13.83, "memory": 6.2, "overhead": 407.46}
};
const video4_3_5 = {
    "predictions": ["198-golf driving",
        "197-golf chipping",
        "199-golf putting",
        "205-hammer throw",
        "509-swinging baseball bat",
        "213-hitting baseball",
        "124-cutting apple",
        "488-spinning poi",
        "366-playing polo",
        "528-throwing ball (not baseball or American football)"],
    "edgeMetrics": { "bandwdith" : 2.62, "latency": 73.40, "memory": 37.5},
    "serverMetrics": { "latency": 12.94, "memory": 6.2, "overhead": 2169.51}
};  
const bw3_5_options = [video1_3_5, video2_3_5, video3_3_5, video4_3_5]

const config = {
    bandwidth: 25,
    minAccuracy: 75,
    maxLatency: 900,
    codebookSize: 32,
    encoder: "Absent",
    offloadPoint: 4,
    index: 4,
};

const bw_3 = {
    low: 833,
    high: 900
}
const bw_6 = {
    low: 833,
    high: 878
}
const bw_25 = {
    low: 810,
    high: 855
}
const acc = {
    low: 70,
    high: 73
}

document.addEventListener("DOMContentLoaded", () => {
    const videoPlayer = document.getElementById("video-player");
    videoPlayer.src = videos[currentVideo];

    videoPlayer.onended = () => {
        currentVideo = (currentVideo + 1) % videos.length;
        videoPlayer.src = videos[currentVideo];
        videoPlayer.play();
        updatePrediction(currentVideo);
    };
    updatePrediction(currentVideo);
    updateConfigUI();
});

// const bandwidthSelect = document.getElementById("bandwidth");

// bandwidthSelect.addEventListener("change", () => {
//     const selectedBandwidth = bandwidthSelect.value;
//     config.bandwidth = selectedBandwidth
//     console.log("Selected Bandwidth:", selectedBandwidth);
//     // Do something with the selected bandwidth, like updating the config
//     updateConfig()
// });

function updateConfig() {
    high_acc = false
    low_acc = false 
    med_acc = false 
    high_lat = false 
    low_lat = false
    med_lat = false 
    config.bandwidth = parseFloat(document.getElementById("bandwidth").value);
    config.minAccuracy = parseFloat(document.getElementById("min-accuracy").value);
    config.maxLatency = parseFloat(document.getElementById("max-latency").value);

    // Simulate updating other parameters based on the input
    if (config.minAccuracy >= acc.high) {high_acc = true}
    else if (config.minAccuracy < acc.low) {low_acc = true}
    else {med_acc = true}
    if (config.bandwidth == 3) {
        if (config.maxLatency >= bw_3.high) {high_lat = true}
        else if (config.maxLatency <= bw_3.low) {low_lat = true}
        else {med_lat = true}

        if (low_lat && low_acc) {
            config.codebookSize = 16;
            config.encoder = "Present";
            config.offloadPoint = 2;
            config.index = 2;
        }
        else if (med_lat && low_acc) {
            config.codebookSize = 16;
            config.encoder = "Present";
            config.offloadPoint = 4;
            config.index = 3;
        }
        else if (high_lat && high_acc) {
            config.codebookSize = 32;
            config.encoder = "Absent";
            config.offloadPoint = 4;
            config.index = 4;
        }
        else if (high_lat && med_acc) {
            config.codebookSize = 16;
            config.encoder = "Absent";
            config.offloadPoint = 4;
            config.index = 5;
        }
        else {
            config.codebookSize = 32;
            config.encoder = "Present";
            config.offloadPoint = 2;
            config.index = 0;
        }
    }

    if (config.bandwidth == 6) {
        if (config.maxLatency >= bw_6.high) {high_lat = true}
        else if (config.maxLatency <= bw_6.low) {low_lat = true}
        else {med_lat = true}

        if (low_lat && low_acc) {
            config.codebookSize = 16;
            config.encoder = "Present";
            config.offloadPoint = 2;
            config.index = 2;
        }
        else if (low_lat && med_acc) {
            config.codebookSize = 32;
            config.encoder = "Present";
            config.offloadPoint = 2;
            config.index = 0;
        }
        else if (med_lat && med_acc) {
            config.codebookSize = 32;
            config.encoder = "Present";
            config.offloadPoint = 4;
            config.index = 1;
        }
        else if (med_lat && low_acc) {
            config.codebookSize = 16;
            config.encoder = "Present";
            config.offloadPoint = 4;
            config.index = 3;
        }
        else if (high_lat && high_acc) {
            config.codebookSize = 32;
            config.encoder = "Absent";
            config.offloadPoint = 4;
            config.index = 4;
        }
        else {
            config.codebookSize = 16;
            config.encoder = "Absent";
            config.offloadPoint = 4;
            config.index = 5;
        }
    }

    if (config.bandwidth == 25) {
        if (config.maxLatency >= bw_25.high) {high_lat = true}
        else if (config.maxLatency <= bw_25.low) {low_lat = true}
        else {med_lat = true}

        if (low_lat && low_acc) {
            config.codebookSize = 16;
            config.encoder = "Present";
            config.offloadPoint = 2;
            config.index = 2;
        }
        else if (low_lat && med_acc) {
            config.codebookSize = 32;
            config.encoder = "Present";
            config.offloadPoint = 2;
            config.index = 0;
        }
        else if (med_lat && med_acc) {
            config.codebookSize = 32;
            config.encoder = "Present";
            config.offloadPoint = 4;
            config.index = 1;
        }
        else if (med_lat && low_acc) {
            config.codebookSize = 16;
            config.encoder = "Present";
            config.offloadPoint = 4;
            config.index = 3;
        }
        else if (high_lat && high_acc) {
            config.codebookSize = 32;
            config.encoder = "Absent";
            config.offloadPoint = 4;
            config.index = 4;
        }
        else {
            config.codebookSize = 16;
            config.encoder = "Absent";
            config.offloadPoint = 4;
            config.index = 5;
        }
    }
    
    if (high_lat) {lat = 'High'}
    else if (low_lat) {lat = 'Low'}
    else {lat = 'Med'}

    if (high_acc) {acc_level = 'High'}
    else if (low_acc) {acc_level = 'Low'}
    else {acc_level = 'Med'}

    const claim = `With ${config.bandwidth} Mbps, ${lat} Latency, and ${acc_level} Accuracy:`
    document.getElementById("claim").innerText = claim;
    
    // config.codebookSize = config.bandwidth > 6 ? 32 : 16;
    // config.encoder = config.minAccuracy > 75 ? "present" : "absent";
    // config.offloadPoint = config.maxLatency > 50 ? 4 : 2;

    // const lut = findConfig(config.minAccuracy, config.maxLatency, config.bandwidth);
    // config.codebookSize = lut.codebookSize;
    // config.encoder = lut.encoderPresence;
    // config.offloadPoint = lut.offloadPoint;

    updateConfigUI();
    // updatePrediction(currentVideo);
}

function updateConfigUI() {
    document.getElementById("codebook-size").innerText = config.codebookSize;
    document.getElementById("encoder").innerText = config.encoder;
    document.getElementById("offload-point").innerText = config.offloadPoint;
    updatePrediction(currentVideo);
}

function updatePrediction(currentVideo) {
    const predictionElement = document.getElementById("prediction");

    if (config.index == 0) {
        index = currentVideo;
        if (config.bandwidth == 25) {video = bw25_0_options[index];}
        if (config.bandwidth == 6) {video = bw6_0_options[index];}
        if (config.bandwidth == 3) {video = bw3_0_options[index];}
    }

    if (config.index == 1) {
        index = currentVideo;
        if (config.bandwidth == 25) {video = bw25_1_options[index];}
        if (config.bandwidth == 6) {video = bw6_1_options[index];}
        if (config.bandwidth == 3) {video = bw3_1_options[index];}
    }

    if (config.index == 2) {
        index = currentVideo;
        if (config.bandwidth == 25) {video = bw25_2_options[index];}
        if (config.bandwidth == 6) {video = bw6_2_options[index];}
        if (config.bandwidth == 3) {video = bw3_2_options[index];}
    }

    if (config.index == 3) {
        index = currentVideo;
        if (config.bandwidth == 25) {video = bw25_3_options[index];}
        if (config.bandwidth == 6) {video = bw6_3_options[index];}
        if (config.bandwidth == 3) {video = bw3_3_options[index];}
    }

    if (config.index == 4) {
        index = currentVideo;
        if (config.bandwidth == 25) {video = bw25_4_options[index];}
        if (config.bandwidth == 6) {video = bw6_4_options[index];}
        if (config.bandwidth == 3) {video = bw3_4_options[index];}
    }

    if (config.index == 5) {
        index = currentVideo;
        if (config.bandwidth == 25) {video = bw25_5_options[index];}
        if (config.bandwidth == 6) {video = bw6_5_options[index];}
        if (config.bandwidth == 3) {video = bw3_5_options[index];}
    }

    predictionElement.innerHTML = '';
    video.predictions.forEach(prediction => {
        const listItem = document.createElement("li");
        listItem.textContent = prediction; // Set the text of the list item
        predictionElement.appendChild(listItem); // Add the list item to the list
    });

    e2e_lat = (video.edgeMetrics.latency + video.serverMetrics.overhead + video.serverMetrics.latency).toFixed(2);
    document.getElementById("e2e-latency").innerText = e2e_lat;

    // predictionElement.innerText = `${currentVideo + 1}: ${predictionsList}`;
    document.getElementById("edge-bw").innerText = video.edgeMetrics.bandwdith;
    document.getElementById("edge-lat").innerText = video.edgeMetrics.latency;
    document.getElementById("edge-mem").innerText = video.edgeMetrics.memory;
    document.getElementById("server-lat").innerText = video.serverMetrics.latency;
    document.getElementById("server-mem").innerText = video.serverMetrics.memory;
    document.getElementById("server-overhead").innerText = video.serverMetrics.overhead;
    
    // predictionElement.innerText = `Prediction for Video ${currentVideo + 1}`;
}
