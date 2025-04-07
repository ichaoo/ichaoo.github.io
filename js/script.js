function fetchHitokoto() {
    fetch('https://v1.hitokoto.cn/')
        .then(r => r.json())
        .then(data => {
            document.getElementById('hitokoto').textContent = 
                `${data.hitokoto} —— ${data.from || '未知来源'}`;
        })
        .catch(() => {
            document.getElementById('hitokoto').textContent = '获取一言失败，点击重试';
        });
}

document.addEventListener('DOMContentLoaded', () => {
    fetchHitokoto();
    document.querySelector('.container').addEventListener('click', fetchHitokoto);
    document.querySelector('.page-title').addEventListener('click', function() {
        this.classList.toggle('active');
    });
});