1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
getElementById()
Selects one element
Uses id
Returns a single DOM element.

getElementsByClassName("class")
Selects elements by class name
Returns a live HTMLCollection
Updates automatically if the DOM changes
Can contain multiple elements.

querySelector("selector")
Returns the first matching element

querySelectorAll("selector")
Returns all matching elements
Does NOT auto-update.

2. How do you create and insert a new element into the DOM?
Create: const newCard = document.createElement('div');

Configure: newCard.className = 'p-4 border bg-white'; and newCard.innerHTML = '...';

Insert: Use parentElement.appendChild(newCard); to add it at the end, or parentElement.prepend(newCard); to add it at the top.
3. What is Event Bubbling? And how does it work?
Event bubbling is when an event starts from the target element and bubbles up to its parent elements.

4. What is Event Delegation in JavaScript? Why is it useful?
Event delegation is attaching a single event listener to a parent element instead of adding listeners to multiple child elements.

It works because of event bubbling.

Why is it useful for the project?

Performance: One listener is cheaper than 100.

Dynamic Content: If you delete a card and add a new one, the parent listener will still work for the new card automatically.
5. What is the difference between preventDefault() and stopPropagation() methods?

preventDefault(): Stops the browser's default action. 

stopPropagation(): Stops the event from bubbling up the DOM.

preventDefault(): Stops the browser's default action. 

stopPropagation(): Stops the event from bubbling up the DOM.
