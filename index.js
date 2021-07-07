// Write your code in this file!
const currentUser = 'Grace Hopper';

//const welcomeMessage = 'Welcome to Flatbook, ' + currentUser + '!';

const welcomeMessage =`Welcome to Flatbook, ${currentUser}!`; 

const excitedWelcomeMessage = welcomeMessage.toUpperCase();

const shortGreeting = `Welcome, ${currentUser.slice(0, 1)}!`;

//'Edsger Dijkstra'.slice(0, 3);
//=> "Eds" <-- 0 is beginning point and 3 is the ending point
