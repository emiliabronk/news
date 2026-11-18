(() => {
  const input = document.getElementById('q');
  if (!input) return;

  const form = input.form;
  const stories = [...document.querySelectorAll('[data-post]')];
  const regions = [...document.querySelectorAll('[data-story-region]')];
  const empty = document.querySelector('.search-empty');

  const filter = () => {
    const query = input.value.trim().toLowerCase();

    for (const story of stories) {
      const searchable = [story.dataset.title, story.dataset.standfirst].join(' ').toLowerCase();
      story.hidden = !searchable.includes(query);
    }
    for (const region of regions) {
      region.hidden = !region.querySelector('[data-post]:not([hidden])');
    }

    empty.hidden = !query || stories.some(story => !story.hidden);
  };

  form.addEventListener('submit', event => event.preventDefault());
  input.addEventListener('input', filter);
  form.hidden = false;
  filter();
})();
