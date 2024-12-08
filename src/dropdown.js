export default function dropdown() {
    const dropdownDiv = document.querySelector('.dropdownDiv');
    const dropdownBtn = document.querySelector('.dropdownBtn');
    dropdownBtn.style.display = 'block';
    const dropdownContent = document.querySelector('.dropdownContent');
    dropdownDiv.addEventListener('mouseover', () => {
        dropdownBtn.textContent = 'Here';
        dropdownDiv.style.width = 'fit-content'
        dropdownDiv.style.border = '2px solid black';
        dropdownContent.style.display = 'flex';
        dropdownContent.style.flexDirection = 'column';
        dropdownDiv.appendChild(dropdownBtn);
        dropdownDiv.appendChild(dropdownContent);
    })
    dropdownDiv.addEventListener('mouseout', () => {
        dropdownBtn.textContent = 'Dropdown';
        dropdownContent.style.display = 'none';
    })
}