<h1 align="center">
    Cesar Cipher Encrypter and Decrypter
</h1>

<h3 align="center">
 :construction: More features to come :construction:
</h3>

<p align="center">

  <a href="https://victoralvarenga.com">
    <img alt="Made by Victor Alvarenga" src="https://img.shields.io/badge/made%20by-Victor Alvarenga-%23134F84">
  </a>

  <a href="https://www.typescriptlang.org/">
    <img alt="Made with Typescript" src="https://img.shields.io/badge/language-Typescript-%23134F84">
  </a>

  <a href="LICENSE" >
    <img alt="License" src="https://img.shields.io/badge/license-MIT-%23134F84">
  </a>

</p>

## :computer: Project

A Node.js API created with Typescript to encrypt text with the Cesar Cipher and crack the encryption from texts encrypted with this same cipher.

```js
Encryption Cracking Example:

Input:
"Iziv}{livi$xlex$Qev}${irx$Xli$peqf${ew$wyvi$xs$ks2"

Output:
"Everywhere that Mary went The lamb was sure to go."
```

This project is a work in progress and will receive more advanced features in the future.

## :triangular_flag_on_post: Updates

- 30/04/2020
  > Full suport for ASCI and ANSI printable Chars;

  > Teach route to improve the API reference table;

## :rocket: Technologies

This project was developed with the following technologies:

- [Node.js](https://nodejs.org/en/)
- [Typescript](https://www.typescriptlang.org/)

## :construction: Future Features

- [x] ASCII and ANSI printable characters full support;

### Encrypters, Decrypters and Crackers for the following Ciphers:
- [ ] Atbash
- [ ] Rail-fence
- [ ] Baconian
- [ ] Simple Substitution
- [ ] Columnar Transposition
- [ ] Vigenère
- [ ] Bifid

## :beginner: Encrypting

The Cesar Cipher is one on the oldest known cipher and also one of the simplest. It is a simple substitution cipher in which each letter in the plaintext is 'shifted' a certain number of places down the alphabet.

For example:
```js
  plaintext: "attack at dawn"
  password: 2

  // Since the password is 2 you will shift each letter 2 positions in the alphabet.

  encrypted: "cvvcem cv fcyp"
```

To improve the security you can add more characters to your "alphabet" as I did in this API.

## :rotating_light: Cracking the Cipher

Being a simple substitution cipher you can brute force it with 26 possible passwords.

But if you prefer a more elegant solution, it is possible to estimate with great precision which are the most likely passwords based on the number of times that each letter is repeated in the ciphertext.

For this you can compare your results with a relational table of the most used letters in your language.

## :memo: License

This project is under the MIT license. See the [LICENSE](LICENSE.md) for details.

---

Made with ♥ by Victor Alvarenga :wave: [Get in touch!](https://www.linkedin.com/in/victoralvarenga/)
