function menuAnimation() {

  const btnMenu = document.querySelectorAll('.btnMenuMatheus');
  const profile = document.querySelector('.profile');

  if (!profile) return;

  profile.classList.add('active');

  btnMenu.forEach(link => {

    link.addEventListener('mouseover', (e) => {
      btnMenu.forEach(btn => btn.classList.remove('active'));
      e.target.classList.add('active');
    });

    link.addEventListener('mouseleave', () => {
      btnMenu.forEach(btn => btn.classList.remove('active'));
      profile.classList.add('active');
    });

  });

}

export default menuAnimation;