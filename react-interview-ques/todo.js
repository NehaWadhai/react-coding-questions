async function loadTodos() {
    try{
        const response = await fetch('https://dummyjson.com/todos?limit=10&skip=80');
        const data = await response.json();
        const groupByuserId={};

        data.todos.forEach((ele)=>{
            if(!groupByuserId[ele.userId]){
                groupByuserId[ele.userId] = []
            }
            groupByuserId[ele.userId].push(ele.todo)
        })

        const container = document.getElementById('todo-container');
        const block = document.createElement('div');
        for(const item in groupByuserId){
          
            const title = document.createElement('h2');
            title.textContent = `User Id :${item}`
            block.appendChild(title);
            const ul = document.createElement('ul');
            groupByuserId[item].forEach((user)=>{
                
                const li = document.createElement('li');
                li.textContent = user;
                ul.appendChild(li);
                
            })
            block.appendChild(ul)
           
            container.appendChild(block);
        }
        
           

    }catch(error){
        console.log("Error loading todos:", error);
    }
}  

loadTodos()