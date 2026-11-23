import React, { useState } from 'react';
import { contact, social } from '../../profile';

const socialLinks = [
  { key: 'github', icon: 'fab fa-github', label: 'GitHub' },
  { key: 'linkedin', icon: 'fab fa-linkedin', label: 'LinkedIn' },
  { key: 'twitter', icon: 'fab fa-twitter', label: 'Twitter' },
  { key: 'facebook', icon: 'fab fa-facebook', label: 'Facebook' },
  { key: 'instagram', icon: 'fab fa-instagram', label: 'Instagram' },
];

const Contact = () => {
  // idle | sending | sent | error
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');

  const onSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = new FormData(form);
    // Label every email so it's clear it came from the portfolio
    data.set('_subject', `${contact.emailSubjectPrefix} ${data.get('subject') || 'New message'}`);
    data.set('source', 'Portfolio website (rickrieger.github.io/portfolio-template)');

    setStatus('sending');
    try {
      const res = await fetch(contact.formspreeUrl, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setStatus('sent');
        form.reset();
      } else {
        const body = await res.json().catch(() => ({}));
        setError(
          body.errors ? body.errors.map((x) => x.message).join(' ') : 'Sorry, your message could not be sent.'
        );
        setStatus('error');
      }
    } catch {
      setError('Sorry, your message could not be sent. Please check your connection and try again.');
      setStatus('error');
    }
  };

  return (
    <section id='contact' className='section section--tint'>
      <div className='container contact'>
        <div className='contact__info' data-aos='fade-up'>
          <h2 className='section__title'>{contact.title}</h2>
          <p>{contact.pitch}</p>
          <div className='contact__social'>
            {socialLinks
              .filter((s) => social[s.key])
              .map((s) => (
                <a key={s.key} href={social[s.key]} target='_blank' rel='noopener noreferrer' aria-label={s.label} title={s.label}>
                  <i className={s.icon}></i>
                </a>
              ))}
          </div>
          {social.resume && (
            <a href={social.resume} target='_blank' rel='noopener noreferrer' className='btn btn--ghost'>
              <i className='fas fa-file-alt'></i> View resume
            </a>
          )}
        </div>

        <form className='contact__form' onSubmit={onSubmit} data-aos='fade-up'>
          <div className='field-row'>
            <label>
              Name
              <input type='text' name='name' required autoComplete='name' />
            </label>
            <label>
              Email
              <input type='email' name='email' required autoComplete='email' />
            </label>
          </div>
          <label>
            Subject
            <input type='text' name='subject' required />
          </label>
          <label>
            Message
            <textarea name='message' rows='5' required></textarea>
          </label>
          <button type='submit' className='btn btn--primary' disabled={status === 'sending'}>
            {status === 'sending' ? 'Sending…' : 'Send message'}
          </button>
          {status === 'sent' && (
            <p className='form-status form-status--ok' role='status'>
              Thanks! Your message has been sent.
            </p>
          )}
          {status === 'error' && (
            <p className='form-status form-status--error' role='alert'>
              {error}
            </p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
