import { apiKey } from "./components/constants/constants";

export const originals = `/discover/tv?api_key=${apiKey}&with_networks=213`
export const trendings = `/trending/all/week?api_key=${apiKey}`
export const actions = `/discover/movie?api_key=${apiKey}&with_genres=28`
export const comedies = `/discover/movie?api_key=${apiKey}&with_genres=35`
export const horrors = `/discover/movie?api_key=${apiKey}&with_genres=27`
export const romantics = `/discover/movie?api_key=${apiKey}&with_genres=10749`
export const documentaries = `/discover/movie?api_key=${apiKey}&with_genres=99`