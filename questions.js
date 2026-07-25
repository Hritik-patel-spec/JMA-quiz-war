const quizData = [
    {
        "question": "Which instrument measures electric current?",
        "options": ["Voltmeter", "Ammeter", "Thermometer", "Barometer"],
        "correct": "Ammeter"
    },
    {
        "question": "Which country has the most volcanoes?",
        "options": ["Japan", "Indonesia", "India", "Brazil"],
        "correct": "Indonesia"
    },
    {
        "question": "Which planet has the most moons?",
        "options": ["Jupiter", "Saturn", "Earth", "Mars"],
        "correct": "Saturn"
    },
    {
        "question": "In which year was the Battle of Buxar fought?",
        "options": ["1757", "1761", "1764", "1857"],
        "correct": "1764"
    },
    {
        "question": "Which fruit has its seeds on the outside?",
        "options": ["Apple", "Mango", "Strawberry", "Orange"],
        "correct": "Strawberry"
    },
    {
        "question": "Who presides over the Rajya Sabha?",
        "options": ["The President of India", "The Prime Minister", "The Vice President of India", "The Speaker"],
        "correct": "The Vice President of India"
    },
    {
        "question": "Which part of the brain controls balance and coordination?",
        "options": ["Cerebrum", "Cerebellum", "Brainstem", "Hypothalamus"],
        "correct": "Cerebellum"
    },
    {
        "question": "Which Article of the Indian Constitution abolishes untouchability?",
        "options": ["Article 14", "Article 17", "Article 21", "Article 32"],
        "correct": "Article 17"
    },
    {
        "question": "What is the capital of Australia?",
        "options": ["Sydney", "Melbourne", "Canberra", "Brisbane"],
        "correct": "Canberra"
    },
    {
        "question": "In which year was the Battle of Plassey fought?",
        "options": ["1757", "1764", "1857", "1761"],
        "correct": "1757"
    },
    {
        "question": "Which element is essential for the formation of hemoglobin?",
        "options": ["Calcium", "Iron", "Sodium", "Potassium"],
        "correct": "Iron"
    },
    {
        "question": "What is the pH value of pure water?",
        "options": ["5", "6", "7", "8"],
        "correct": "7"
    },
    {
        "question": "Which nation gifted the Statue of Liberty to the USA?",
        "options": ["United Kingdom", "France", "Germany", "Spain"],
        "correct": "France"
    },
    {
        "question": "Which country is known as the 'Land of a Thousand Lakes'?",
        "options": ["Norway", "Finland", "Canada", "Sweden"],
        "correct": "Finland"
    },
    {
        "question": "Which is the only river in the world that crosses the Equator twice?",
        "options": ["Amazon River", "Nile River", "Congo River", "Mississippi River"],
        "correct": "Congo River"
    },
    {
        "question": "When is Constitution Day celebrated in India?",
        "options": ["15 August", "26 January", "26 November", "2 October"],
        "correct": "26 November"
    },
    {
        "question": "What is the largest bone in the human body?",
        "options": ["Tibia", "Femur", "Humerus", "Radius"],
        "correct": "Femur"
    },
    {
        "question": "Which country is called the 'Land of Fire and Ice'?",
        "options": ["Greenland", "Iceland", "New Zealand", "Japan"],
        "correct": "Iceland"
    },
    {
        "question": "Which Indian state has the longest coastline?",
        "options": ["Tamil Nadu", "Maharashtra", "Gujarat", "Andhra Pradesh"],
        "correct": "Gujarat"
    },
    {
        "question": "Who was known as the 'Iron Man of India'?",
        "options": ["Subhas Chandra Bose", "Sardar Vallabhbhai Patel", "Bhagat Singh", "Jawaharlal Nehru"],
        "correct": "Sardar Vallabhbhai Patel"
    },
    {
        "question": "Which particle has no electric charge but has mass?",
        "options": ["Proton", "Electron", "Neutron", "Positron"],
        "correct": "Neutron"
    },
    {
        "question": "Which animal never sleeps fully?",
        "options": ["Shark", "Dolphin", "Elephant", "Giraffe"],
        "correct": "Dolphin"
    },
    {
        "question": "Which movie features the fictional planet Pandora?",
        "options": ["Interstellar", "Avatar", "Star Wars", "Guardians of the Galaxy"],
        "correct": "Avatar"
    },
    {
        "question": "Which country has the largest number of time zones?",
        "options": ["Russia", "USA", "France", "China"],
        "correct": "France"
    },
    {
        "question": "What does OTT stand for?",
        "options": ["Over-The-Top", "On-The-Time", "Over-The-Text", "Open-To-Transmission"],
        "correct": "Over-The-Top"
    },
    {
        "question": "Which is the only mammal that can truly fly?",
        "options": ["Flying Squirrel", "Bat", "Sugar Glider", "Flying Lemur"],
        "correct": "Bat"
    },
    {
        "question": "What is the scientific name of humans?",
        "options": ["Homo erectus", "Homo habilis", "Homo sapiens", "Pan troglodytes"],
        "correct": "Homo sapiens"
    },
    {
        "question": "Which constitutional amendment is known as the 'Mini Constitution'?",
        "options": ["44th Amendment", "42nd Amendment", "73rd Amendment", "86th Amendment"],
        "correct": "42nd Amendment"
    },
    {
        "question": "Which Indian state is known as the 'Spice Garden of India'?",
        "options": ["Karnataka", "Kerala", "Assam", "Tamil Nadu"],
        "correct": "Kerala"
    },
    {
        "question": "Which is the only continent without an active volcano?",
        "options": ["Europe", "Australia", "Antarctica", "North America"],
        "correct": "Australia"
    },
    {
        "question": "Which plateau is known as the 'Roof of the World'?",
        "options": ["Deccan Plateau", "Tibetan Plateau", "Colorado Plateau", "Anatolian Plateau"],
        "correct": "Tibetan Plateau"
    },
    {
        "question": "Who wrote the book Arthashastra?",
        "options": ["Kalidasa", "Chanakya (Kautilya)", "Banabhatta", "Aryabhata"],
        "correct": "Chanakya (Kautilya)"
    },
    {
        "question": "Which country has the longest coastline in the world?",
        "options": ["Russia", "Canada", "Australia", "Indonesia"],
        "correct": "Canada"
    },
    {
        "question": "Which country hosted the G20 Summit in 2023?",
        "options": ["Brazil", "Indonesia", "India", "South Africa"],
        "correct": "India"
    },
    {
        "question": "What is the largest gland in the human body?",
        "options": ["Pancreas", "Thyroid", "Liver", "Pituitary"],
        "correct": "Liver"
    },
    {
        "question": "Which longitude is the basis for Indian Standard Time (IST)?",
        "options": ["82°30' East Longitude", "80°00' East Longitude", "85°30' East Longitude", "75°00' East Longitude"],
        "correct": "82°30' East Longitude"
    },
    {
        "question": "Which is the highest law-making body in India?",
        "options": ["Supreme Court", "Parliament", "President", "NITI Aayog"],
        "correct": "Parliament"
    },
    {
        "question": "Which planet has the highest gravitational pull in the Solar System?",
        "options": ["Jupiter", "Saturn", "Neptune", "Earth"],
        "correct": "Jupiter"
    },
    {
        "question": "Which blood cells help fight infections?",
        "options": ["Red Blood Cells", "White Blood Cells (WBCs)", "Platelets", "Plasma"],
        "correct": "White Blood Cells (WBCs)"
    },
    {
        "question": "Which gas is known as 'laughing gas'?",
        "options": ["Nitrous oxide (N₂O)", "Carbon monoxide", "Methane", "Sulfur dioxide"],
        "correct": "Nitrous oxide (N₂O)"
    },
    {
        "question": "Which superhero is also known as the 'Caped Crusader'?",
        "options": ["Superman", "Batman", "Spider-Man", "Iron Man"],
        "correct": "Batman"
    },
    {
        "question": "How many chambers does the human heart have?",
        "options": ["Two", "Three", "Four", "Six"],
        "correct": "Four"
    },
    {
        "question": "Which award is considered the highest honor in Indian cinema?",
        "options": ["Filmfare Award", "Dadasaheb Phalke Award", "National Film Award", "Padma Shri"],
        "correct": "Dadasaheb Phalke Award"
    },
    {
        "question": "Which country has the most neighbouring countries?",
        "options": ["China (tied with Russia)", "India", "Brazil", "Germany"],
        "correct": "China (tied with Russia)"
    },
    {
        "question": "Which is the largest island in the world?",
        "options": ["Madagascar", "Greenland", "Borneo", "New Guinea"],
        "correct": "Greenland"
    },
    {
        "question": "Which blood group is known as the universal recipient?",
        "options": ["O Negative", "AB Positive (AB+)", "A Positive", "B Positive"],
        "correct": "AB Positive (AB+)"
    },
    {
        "question": "Which Viceroy announced the partition of Bengal in 1905?",
        "options": ["Lord Dalhousie", "Lord Curzon", "Lord Mountbatten", "Lord Ripon"],
        "correct": "Lord Curzon"
    },
    {
        "question": "Which is the longest river in the world?",
        "options": ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
        "correct": "Nile River"
    },
    {
        "question": "Which sport is known as the 'Gentleman's Game'?",
        "options": ["Golf", "Cricket", "Tennis", "Polo"],
        "correct": "Cricket"
    },
    {
        "question": "Which country has the most time zones (including overseas territories)?",
        "options": ["Russia", "USA", "France", "China"],
        "correct": "France"
    },
    {
        "question": "Which Indian leader gave the slogan 'Jai Jawan, Jai Kisan'?",
        "options": ["Lal Bahadur Shastri", "Mahatma Gandhi", "Subhas Chandra Bose", "Jawaharlal Nehru"],
        "correct": "Lal Bahadur Shastri"
    },
    {
        "question": "Which vitamin helps in blood clotting?",
        "options": ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
        "correct": "Vitamin K"
    },
    {
        "question": "Which country lies in both Europe and Asia?",
        "options": ["Egypt", "Russia", "Greece", "Italy"],
        "correct": "Russia"
    },
    {
        "question": "Which is the only active volcano in India?",
        "options": ["Barren Island Volcano", "Narcondam Island", "Deccan Traps", "Baratang"],
        "correct": "Barren Island Volcano"
    },
    {
        "question": "What is the highest sporting award in India?",
        "options": ["Arjuna Award", "Major Dhyan Chand Khel Ratna Award", "Dronacharya Award", "Padma Bhushan"],
        "correct": "Major Dhyan Chand Khel Ratna Award"
    },
    {
        "question": "Which country has no rivers?",
        "options": ["Qatar", "Saudi Arabia", "UAE", "Oman"],
        "correct": "Saudi Arabia"
    },
    {
        "question": "Which bird can fly backwards?",
        "options": ["Eagle", "Hummingbird", "Kingfisher", "Swallow"],
        "correct": "Hummingbird"
    },
    {
        "question": "Which is the only sport played on the Moon?",
        "options": ["Tennis", "Golf", "Baseball", "Badminton"],
        "correct": "Golf"
    },
    {
        "question": "Which metal is liquid at room temperature?",
        "options": ["Gallium", "Mercury", "Bromine", "Sodium"],
        "correct": "Mercury"
    },
    {
        "question": "Which scientist developed the periodic table?",
        "options": ["Dmitri Mendeleev", "Antoine Lavoisier", "John Dalton", "Niels Bohr"],
        "correct": "Dmitri Mendeleev"
    },
    {
        "question": "Which river is known as the 'Ganga of South India'?",
        "options": ["Krishna", "Kaveri", "Godavari", "Narmada"],
        "correct": "Godavari"
    },
    {
        "question": "Which scientist discovered electromagnetic induction?",
        "options": ["Michael Faraday", "Nikola Tesla", "James Clerk Maxwell", "Thomas Edison"],
        "correct": "Michael Faraday"
    }
];