document.addEventListener('DOMContentLoaded', function() {
  const githubUsername = 'BryanR6';  // Substitua pelo seu nome de usuário no GitHub
  const apiUrl = `https://api.github.com/users/${githubUsername}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      document.getElementById('profile-pic').src = data.avatar_url;
      document.getElementById('username').textContent = data.name || data.login;
      document.getElementById('bio').textContent = data.bio || 'Sem bio disponível';
      document.getElementById('location').textContent = data.location || 'Localização não disponível';
      
      document.getElementById('blog').textContent = data.twitter_username ? `Twitter: ${data.twitter_username}` : 'Twitter não disponível';
      document.getElementById('blog').href = data.twitter_username ? `https://twitter.com/${data.twitter_username}` : '#';
      
      document.getElementById('github-link').href = data.html_url;
      document.getElementById('followers').textContent = `Seguidores: ${data.followers}`;
    })
    .catch(error => console.error('Erro ao buscar dados do perfil:', error));
});





document.addEventListener('DOMContentLoaded', function() {
  const githubUsername = 'BryanR6'; 
  const reposApiUrl = `https://api.github.com/users/${githubUsername}/repos`;

  fetch(reposApiUrl)
    .then(response => response.json())
    .then(repos => {
      const reposContainer = document.getElementById('repos-container');
      reposContainer.innerHTML = '';

      repos.forEach(repo => {
        const repoCard = document.createElement('div');
        repoCard.classList.add('card');

        repoCard.innerHTML = `
          <h2>${repo.name}</h2>
          <p class="description">${repo.description || 'Sem descrição disponível'}</p>
          <p>⭐ Estrelas: ${repo.stargazers_count}</p>
          <p>🔀 Forks: ${repo.forks_count}</p>
          <a href="repo.html?repo=${repo.name}"><button>Saiba mais</button></a>
        `;

        reposContainer.appendChild(repoCard);
      });
    })
    .catch(error => console.error('Erro ao buscar dados dos repositórios:', error));
});

// script.js

function redirectToRepo(repoName) {
  window.location.href = `repo.html?repo=${repoName}`;
}




// script.js

document.addEventListener('DOMContentLoaded', function() {
  const params = new URLSearchParams(window.location.search);
  const repoName = params.get('repo');

  if (repoName) {
    fetchRepoDetails(repoName);
  } else {
    console.error('Nome do repositório não foi fornecido.');
  }
});

function fetchRepoDetails(repoName) {
  const apiUrl = `https://api.github.com/repos/${repoName}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(repo => {
      document.getElementById('repo-name').textContent = repo.name;
      document.getElementById('descricao-repo').textContent = repo.description || 'Sem descrição disponível';
      document.getElementById('data-criacao').textContent = new Date(repo.created_at).toLocaleDateString('pt-BR');
      document.getElementById('linguagem').textContent = repo.language || 'Não especificada';
      document.getElementById('repo-link').href = repo.html_url;
      document.getElementById('estrelas').textContent = repo.stargazers_count;
      document.getElementById('forks').textContent = repo.forks;

      fetch(`${apiUrl}/topics`)
        .then(response => response.json())
        .then(topics => {
          const topicsList = document.getElementById('lista-topicos');
          topics.names.forEach(topic => {
            const li = document.createElement('li');
            li.textContent = topic;
            topicsList.appendChild(li);
          });
        })
        .catch(error => console.error('Erro ao obter tópicos do repositório:', error));
    })
    .catch(error => console.error('Erro ao obter detalhes do repositório:', error));
}

document.addEventListener('DOMContentLoaded', function() {
  const params = new URLSearchParams(window.location.search);
  const repoName = params.get('repo');

  if (repoName) {
    fetchRepoDetails(repoName);
  } else {
    console.error('Nome do repositório não foi fornecido.');
  }
});

function fetchRepoDetails(repoName) {
  const apiUrl = `https://api.github.com/repos/BryanR6/${repoName}`;

  fetch(apiUrl)
    .then(response => response.json())
    .then(repo => {
      // Preencher os detalhes do repositório na página
      document.getElementById('repo-name').textContent = repo.name;
      document.getElementById('descricao-repo').textContent = repo.description || 'Sem descrição disponível';
      document.getElementById('data-criacao').textContent = new Date(repo.created_at).toLocaleDateString('pt-BR');
      document.getElementById('linguagem').textContent = repo.language || 'Não especificada';
      document.getElementById('repo-link').href = repo.html_url;
      document.getElementById('estrelas').textContent = repo.stargazers_count;
      document.getElementById('forks').textContent = repo.forks;

      // Preencher os tópicos do repositório
      fetch(`${apiUrl}/topics`)
        .then(response => response.json())
        .then(topics => {
          const topicsList = document.getElementById('lista-topicos');
          topics.names.forEach(topic => {
            const li = document.createElement('li');
            li.textContent = topic;
            topicsList.appendChild(li);
          });
        })
        .catch(error => console.error('Erro ao obter tópicos do repositório:', error));
    })
    .catch(error => console.error('Erro ao obter detalhes do repositório:', error));
}

