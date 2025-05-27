

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('userForm');
    const tableBody = document.getElementById('usersTable');

    // Betöltés LocalStorage-ból
    function loadData() {
        const data = JSON.parse(localStorage.getItem('termekek')) || [];
        tableBody.innerHTML = '';
        data.forEach((item, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${item.termekek}</td>
                <td>${item.nev}</td>
                <td>${item.ar}</td>
                <td>${item.keszlet}</td>
                <td>${item.kat}</td>
                <td>${item.leiras}</td>
            `;
            tableBody.appendChild(row);
        });
    }

    // Űrlap beküldése
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const termekek = document.getElementById('termekek_id').value;
        const nev = document.getElementById('nev_id').value;
        const ar = document.getElementById('ar_id').value;
        const keszlet = document.getElementById('keszlet_id').value;
        const kat = document.getElementById('kat_id').value;
        const leiras = document.getElementById('leiras_id').value;

        const ujTermek = {
            termekek,
            nev,
            ar,
            keszlet,
            kat,
            leiras
        };

        const data = JSON.parse(localStorage.getItem('termekek')) || [];
        data.push(ujTermek);
        localStorage.setItem('termekek', JSON.stringify(data));

        form.reset();
        loadData();
    });

    loadData();
});

