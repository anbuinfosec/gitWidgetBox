document.getElementById('data').addEventListener('change', function() {
    const skillsInput = document.getElementById('skills-input');
    const languagesInput = document.getElementById('languages-input');
    const frameworksInput = document.getElementById('frameworks-input');
    const librariesInput = document.getElementById('libraries-input');
    const toolsInput = document.getElementById('tools-input');
    const softwareInput = document.getElementById('software-input');

    skillsInput.classList.add('hidden');
    languagesInput.classList.add('hidden');
    frameworksInput.classList.add('hidden');
    librariesInput.classList.add('hidden');
    toolsInput.classList.add('hidden');
    softwareInput.classList.add('hidden');

    switch (this.value) {
        case 'skills':
            skillsInput.classList.remove('hidden');
            break;
        case 'languages':
            languagesInput.classList.remove('hidden');
            break;
        case 'frameworks':
            frameworksInput.classList.remove('hidden');
            break;
        case 'libraries':
            librariesInput.classList.remove('hidden');
            break;
        case 'tools':
            toolsInput.classList.remove('hidden');
            break;
        case 'software':
            softwareInput.classList.remove('hidden');
            break;
    }
});

document.getElementById('widget-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    const data = document.getElementById('data').value;
    const theme = document.getElementById('theme').value;
    let widgetUrl = `https://github-widgetbox.vercel.app/api/profile?username=${username}&data=${data}&theme=${theme}`;

    if (data === 'skills') {
        const skills = document.getElementById('skills').value;
        widgetUrl = `https://github-widgetbox.vercel.app/api/skills?username=${username}&skills=${encodeURIComponent(skills)}&theme=${theme}`;
    } else if (data === 'languages') {
        const languages = document.getElementById('languages').value;
        widgetUrl = `https://github-widgetbox.vercel.app/api/skills?username=${username}&languages=${encodeURIComponent(languages)}&theme=${theme}`;
    } else if (data === 'frameworks') {
        const frameworks = document.getElementById('frameworks').value;
        widgetUrl = `https://github-widgetbox.vercel.app/api/skills?username=${username}&frameworks=${encodeURIComponent(frameworks)}&theme=${theme}`;
    } else if (data === 'libraries') {
        const libraries = document.getElementById('libraries').value;
        widgetUrl = `https://github-widgetbox.vercel.app/api/skills?username=${username}&libraries=${encodeURIComponent(libraries)}&theme=${theme}`;
    } else if (data === 'tools') {
        const tools = document.getElementById('tools').value;
        widgetUrl = `https://github-widgetbox.vercel.app/api/skills?username=${username}&tools=${encodeURIComponent(tools)}&theme=${theme}`;
    } else if (data === 'software') {
        const software = document.getElementById('software').value;
        widgetUrl = `https://github-widgetbox.vercel.app/api/skills?username=${username}&software=${encodeURIComponent(software)}&theme=${theme}`;
    }

    const widgetPreview = document.getElementById('widget-preview');
    widgetPreview.innerHTML = `<a href="https://github.com/${username}" target="_blank"><img src="${widgetUrl}" alt="GitHub Widget"></a>`;
    const widgetCode = document.getElementById('widget-code');
    widgetCode.querySelector('p').textContent = `[![GitHub Widget](${widgetUrl})](https://github.com/${username})`;
});

function copyToClipboard() {
    const codeElement = document.getElementById('widget-code').querySelector('p');
    const textarea = document.createElement('textarea');
    textarea.value = codeElement.textContent;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Copied to clipboard!');
}
