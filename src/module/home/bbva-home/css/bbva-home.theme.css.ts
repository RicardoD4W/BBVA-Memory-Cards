import { CSSResult, CSSResultOrNative, css } from 'lit';

export class BbvaHomeTheme {
  static cssBase: CSSResult = css`
    :host {
      display: block;
      height: 100%;
    }

    .main-container {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      flex-direction: column;
    }

    .login-form {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      justify-content: center;
      align-items: center;
    }

    .wave-group {
      position: relative;
    }

    .wave-group .input {
      font-size: 1rem;
      padding: 10px 10px 10px 5px;
      display: block;
      width: 11.5rem;
      border: none;
      border-bottom: 1px solid #a8a8a8;
    }

    .wave-group .input:focus {
      outline: none;
    }

    .wave-group .label {
      color: #a8a8a8;
      font-size: 18px;
      font-weight: normal;
      position: absolute;
      pointer-events: none;
      left: 5px;
      top: 10px;
      display: flex;
    }

    .wave-group .label-char {
      transition: 0.2s ease all;
      transition-delay: calc(var(--i) * 0.05s);
    }

    .wave-group .input:focus ~ label .label-char,
    .wave-group .input:valid ~ label .label-char {
      transform: translateY(-20px);
      font-size: 14px;
      color: var(--theme-color);
    }

    .wave-group .bar {
      position: relative;
      display: block;
      width: 200px;
    }

    .wave-group .bar:before,
    .wave-group .bar:after {
      content: '';
      height: 2px;
      width: 0;
      bottom: 1px;
      position: absolute;
      background: var(--theme-color);
      transition: 0.2s ease all;
      -moz-transition: 0.2s ease all;
      -webkit-transition: 0.2s ease all;
    }

    .wave-group .bar:before {
      left: 50%;
    }

    .wave-group .bar:after {
      right: 50%;
    }

    .wave-group .input:focus ~ .bar:before,
    .wave-group .input:focus ~ .bar:after {
      width: 50%;
    }
  `;

  static BbvaHomeTheme: CSSResultOrNative[] = [BbvaHomeTheme.cssBase];
}
