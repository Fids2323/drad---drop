const item = document.querySelector('.item')
const placeholders = document.querySelectorAll('.placeholder')

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

for (const placeholder of placeholders) {
	placeholder.addEventListener('dragover', dragover) //up
	placeholder.addEventListener('dragenter', dragenter) //here
	placeholder.addEventListener('dragleave', dragleave) //out
	placeholder.addEventListener('drop', dragdrop) // let go
}


function dragstart(event) {
	//console.log('drag start', event.target)
	event.target.classList.add('hold')
	setTimeout(() => event.target.classList.add('hide'), 0)

}

function dragend(event) {
	//console.log('drag end')
	event.target.classList.remove('hold', 'hide') //method monipul classes
	//event.target.className='item'  work with string
}

function dragover(event) {
	event.preventDefault()
	//console.log('drag over')
}

function dragenter(event) {
	event.target.classList.add('hovered')
	console.log('drag enter')
}

function dragleave(event) {
	event.target.classList.remove('hovered')
	//console.log('drag leave')
}

function dragdrop(event) {
	event.target.classList.remove('hovered')
	event.target.append(item)
	//console.log('drag drop')
}