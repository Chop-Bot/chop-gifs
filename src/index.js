import { GIF_COUNT } from './constants';

const URL = 'https://cdn.chop.coffee';

function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function blush() {
  return `${URL}/blush/${random(0, GIF_COUNT.blush)}.gif`;
}

export function coffee() {
  return `${URL}/coffee/${random(0, GIF_COUNT.coffee)}.gif`;
}

export function confused() {
  return `${URL}/confused/${random(0, GIF_COUNT.confused)}.gif`;
}

export function cry() {
  return `${URL}/cry/${random(0, GIF_COUNT.cry)}.gif`;
}

export function cuddle() {
  return `${URL}/cuddle/${random(0, GIF_COUNT.cuddle)}.gif`;
}

export function cute() {
  return `${URL}/cute/${random(0, GIF_COUNT.cute)}.gif`;
}

export function highfive() {
  return `${URL}/highfive/${random(0, GIF_COUNT.highfive)}.gif`;
}

export function holdhands() {
  return `${URL}/holdhands/${random(0, GIF_COUNT.holdhands)}.gif`;
}

export function hug() {
  return `${URL}/hug/${random(0, GIF_COUNT.hug)}.gif`;
}

export function kiss() {
  return `${URL}/kiss/${random(0, GIF_COUNT.kiss)}.gif`;
}

export function laugh() {
  return `${URL}/laugh/${random(0, GIF_COUNT.laugh)}.gif`;
}

export function lick() {
  return `${URL}/lick/${random(0, GIF_COUNT.lick)}.gif`;
}

export function pout() {
  return `${URL}/pout/${random(0, GIF_COUNT.pout)}.gif`;
}

export function punch() {
  return `${URL}/punch/${random(0, GIF_COUNT.punch)}.gif`;
}

export function smug() {
  return `${URL}/smug/${random(0, GIF_COUNT.smug)}.gif`;
}

export function stare() {
  return `${URL}/stare/${random(0, GIF_COUNT.stare)}.gif`;
}
