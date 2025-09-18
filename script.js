        // Part 2: JavaScript Functions
        
        // Generate a random number between min and max (parameters)
        function getRandomNumber(min, max) {
            // Local variables - these only exist inside this function
            const randomValue = Math.random();
            const randomNumber = Math.floor(randomValue * (max - min + 1)) + min;
            
            return randomNumber; // Return the calculated value
        }
        
        // Global variable - accessible throughout the script
        let clickCount = 0;
        
        // Function to demonstrate parameters and return values
        function showRandomNumber() {
            clickCount++; // Modifying global variable
            
            // Call our function with parameters and get the return value
            const randomNum = getRandomNumber(1, 100);
            
            // Update the DOM with the result
            document.getElementById('randomResult').textContent = 
                `Random number: ${randomNum} (Clicked ${clickCount} times)`;
        }
        
        // Part 3: Combining CSS and JavaScript
        
        // Function to flip the card
        function flipCard() {
            const card = document.getElementById('card');
            card.classList.toggle('flipped');
        }
        
        // Function to show/hide modal
        function toggleModal() {
            const modal = document.getElementById('modal');
            modal.classList.toggle('show');
        }