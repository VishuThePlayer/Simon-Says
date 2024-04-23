let show = document.querySelector('.show');
console.log(show);
let button = document.querySelector('button');
let task_title = document.querySelector('#form_text');
let task_info = document.querySelector('#form_input');
let m = 0;


button.addEventListener('click', function(event) {
    if(task_info.value == '' || task_title.value == '') {
        event.preventDefault();
        alert('Please enter a title and description');
    }
    else{
        m++;
        event.preventDefault();
        // Create elements
    
        let card = document.createElement('div');
        card.classList.add('card');
    
        let number = document.createElement('div');
        number.classList.add('number');
        let numberText = document.createElement('p');
        numberText.textContent = m;
        number.appendChild(numberText);
    
        let td = document.createElement('div');
        td.classList.add('td');
        let date = document.createElement('div');
        date.classList.add('date');
        
        let dateText = document.createElement('p');
        let currentDate = new Date();
        let dateString = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()}`;
        dateText.textContent = dateString;
        
        // Store the Date object as a property of the element
        date.dateValue = currentDate;
        
        date.appendChild(dateText);
        
        let time = document.createElement('div');
        time.classList.add('time');
        let timeText = document.createElement('p');
        timeText.setAttribute('id', 'info');
        
        // Append timeText to time element
        time.appendChild(timeText);
        
        // Set the text content for timeText
        let hours = currentDate.getHours().toString().padStart(2, '0');
        let minutes = currentDate.getMinutes().toString().padStart(2, '0');
        timeText.textContent = `${hours}:${minutes}`;
        
        // Append date and time elements to the card
        card.appendChild(date);
        card.appendChild(time);
        
        // Append the card to the document
        document.body.appendChild(card);
        
    
        let task = document.createElement('div');
        task.classList.add('task');
        let taskTitle = document.createElement('h3');
        taskTitle.setAttribute('id', 'title');
        taskTitle.textContent = 'Task Title';
    
    
        let taskContent = document.createElement('p');
        taskContent.setAttribute('id', 'info');
        taskContent.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores numquam, minima reprehenderit eius quos distinctio temporibus nesciunt, voluptas, recusandae ullam voluptatibus aut dolorum molestias totam est delectus ab sint incidunt.';
        task.appendChild(taskTitle);
        task.appendChild(taskContent);
    
    
        // Get references to the input elements
        let task_title = document.querySelector('#form_text');
        let task_info = document.querySelector('#form_input');
    
        // Check if elements were found
        if (!task_title || !task_info) {
            console.error("Input elements not found");
            return;
        }
    
        // Log input values
        console.log(task_title.value);
        console.log(task_info.value);
    
        // Set task title content
        taskTitle.textContent = task_title.value;
        taskContent.textContent = task_info.value;
    
        // Append elements to card
        card.appendChild(number);
        card.appendChild(td);
        td.appendChild(date);
        td.appendChild(time);
        card.appendChild(task);
    
        // Append card to document body
        show.append(card);


        // Clear the input elements
        task_title.value = '';
        task_info.value = '';
    }
});

