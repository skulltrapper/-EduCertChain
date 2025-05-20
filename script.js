document.getElementById('issueForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  const data = {
    studentID: document.getElementById('studentID').value,
    name: document.getElementById('name').value,
    degree: document.getElementById('degree').value,
    institution: document.getElementById('institution').value,
    year: document.getElementById('year').value
  };

  const response = await fetch('http://localhost:3000/issueCertificate', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  });

  const result = await response.json();
  alert(result.message);
});

async function verifyCertificate() {
  const id = document.getElementById('verifyID').value;
  const response = await fetch(`http://localhost:3000/verifyCertificate/${id}`);
  const result = await response.json();
  document.getElementById('verifyResult').textContent = result.valid ? 'Valid Certificate' : 'Not Found';
}
