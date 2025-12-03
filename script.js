//your JS code here. If required.
function removeColour()
{
	const selectElement=document.getElementById('colorSelect');
			const selectedIndex=selectElement.selectedIndex;
	if (selectedIndex >= 0){
		selectElement.options[selectedIndex].remove();
	}
	else{
		alert("Please select a color to remove.");
	}
}


const removeButton = document.querySelector('input[type="button"]');

removeButton.addEventListener('click',removeColour);