import React, { useState, useEffect, useRef } from 'react';

// Validates the first half of an email address.
const validateText = (text) => !text.includes('ᐠ.ꞈ.ᐟ');

const messages = [
  '你好',
  'Hola',
  '今日は',
  '안녕하세요',
  'Bonjour',
  'Hallo',
  'Ciao',
  'Salve',
  'नमस्ते',
  'ᐊᐃᓐᖓᐃ',
  'γεια σας',
  '/ᐠ.ꞈ.ᐟ\\',
  'Hello',
];

const useInterval = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay) {
      const id = setInterval(() => {
        savedCallback.current();
      }, delay);
      return () => clearInterval(id);
    }
    return () => {}; // pass linter
  }, [delay]);
};

const EmailLink = () => {
  const hold = 50; // ticks to wait after message is complete before rendering next message
  const delay = 50; // tick length in mS

  const [idx, updateIter] = useState(0); // points to current message
  const [message, updateMessage] = useState(messages[idx]);
  const [char, updateChar] = useState(messages[idx].length); // points to current char
  const [isActive, setIsActive] = useState(true); // disable when all messages are printed

  useInterval(() => {
    let newIdx = idx;
    let newChar = char;
    if (char - hold >= messages[idx].length) {
      newIdx += 1;
      newChar = 0;
    }
    if (newIdx === messages.length) {
      setIsActive(false);
    } else {
      updateMessage(messages[newIdx].slice(0, newChar));
      updateIter(newIdx);
      updateChar(newChar + 1);
    }
  }, isActive ? delay : null);

  return (
    <div
      className="inline-container"
      style={validateText(message) ? {} : { color: 'blue', style: 'font-weight: bolder' }}
      onMouseEnter={() => setIsActive(false)}
      onMouseLeave={() => (idx < messages.length) && setIsActive(true)}
    >
      <a href={validateText(message) ? 'mailto:ivyjin215@gmail.com' : ''}>
        <span>{message}</span>
        <span>!</span>
      </a>
    </div>
  );
};

export default EmailLink;
