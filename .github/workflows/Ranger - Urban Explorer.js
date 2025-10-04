/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*  -INFORMATION-
	Subject:	Subclass
	Effect:		This script adds a subclass for the Ranger, called "Urban Explorer" - This is a homebrew class designed by AdmiralChry
	Code by:	Angbrennil
	Date:		2025-02-01 (sheet v13.1.0)
 */

var iFileName = "Ranger - Urban Explorer.js";
// RequiredSheetVersion("13.1.0");

AddSubClass ("ranger", "urban explorer"), {
	regExpSearch : /urbanexplorer/i,
	subname : "Urban Explorer",
	source : ["HB", 0],
	fullname : "Urban Explorer",
	features : {
		
    "subclassfeature3" : {
			name : "Street Runner",
			source : ["HB", 0],
			minlevel : 3,
			description : "\n   " + "At 3rd level, you have learned to navigate a city's crowded streets and alleys without being slowed down. You gain the following benefits: You gain a climbing speed equal to your walking speed. You are able to pass through a creature's space even if they are not two sizes larger or smaller than you by spending 1 extra foot of movement for every foot moved. Squeezing into a space one size smaller than you does not cost extra movement. You do not take any damage from falling from a height of 15 feet or less.",
			speed : {
			climb : { spd : "walk", enc : 0 }
			}
		},
		
		"subclassfeature3.1" : {
			name : "City Guide",
			source : ["HB", 0],
			minlevel : 3,
			description : "\n   " + "Also at 3rd level, you gain the benefits of your Natural Explorer feature while in an urban environment in addition to all other benefits you would receive.",
		},
		
		"subclassfeature3.2" : {
			name : "Shot Caller",
			source : ["HB", 0],
			minlevel : 3,
			description : "\n   " + "At 3rd level, your ability to track a target through the crowd becomes second nature. Once per turn when you hit a creature with a weapon attack, you can mark it as your target. The next attack that hits your target adds 1d8 to the damage roll and causes the creature to no longer be marked. While a target is marked, you have advantage on Wisdom (Perception) checks when tracking its position.",
		},
			
		"subclassfeature7" : {
			name : "Improvised Defenses",
			source : ["HB", 0],
			minlevel : 7,
			description : "\n   " + "At 7th level, you have learned to use your surroundings as part of your defenses. When you are hit by an attack, you can use your reaction to grab an object that is not being worn or carried, or a creature that is within 5 feet of you, to deflect the attack. An object reduces the amount of damage by its hit points. If the damage exceeds the objects total hit points, the object is destroyed and any remaining damage is carried over to you. If an object is not destroyed, you may continue to use it in your defense until the start of your next turn or until it is destroyed. When attempting to grab a creature within 5 feet of you, you must succeed at grappling the creature. This must be a creature other than the one making the attack. On a success, the attack instead hits the target of your   grapple. If the attack roll is less than the creature's AC, the attack misses. Your grapple immediately ends after the attack is made. A creature can choose to fail their Strength (Athletics) or Dexterity (Acrobatics) check for the grapple. Once a creature is grappled in this way, it can't be the target of this feature for 24 hours."
		},
		
		"subclassfeature11" : {
			name : "Mobile Offense",
			source : ["HB", 0],
			minlevel : 11,
			description : "\n   " + "Starting at 11th level, you have learned to attack even when on the move. When you use the Dash, Disengage or Dodge actions, you can make one weapon attack before the end of your turn."
		},
		
		"subclassfeature15" : {
			name : "Hidden in the Crowd",
			source : ["HB", 0],
			minlevel : 15,
			description : "\n   " + "At 15th level, you can use a bonus action on your turn after making a weapon attack to move up 10 feet to an unoccupied space. If there are any other creatures within 10 feet of your original location, the target of your attack has disadvantage on Wisdom (Perception) checks to determine who made the attack.",
		}
		
	}
};
