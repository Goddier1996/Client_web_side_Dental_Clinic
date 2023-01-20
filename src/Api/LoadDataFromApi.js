import { API } from './API';
import axios from 'axios';


// ALL REVIEWS THIS CLINIC

export async function LoadReviews() {

    // USE FETCH
    // let res = await fetch(API.REVIEWS.GET, { method: 'GET' });
    // let data = await res.json();
    // return data;

    // USE AXIOS
    const response = await axios.get(API.REVIEWS.GET, { timeout: 5000 });
    return response.data;
}



// ADOUT THIS CLINIC COUNT DETAILS

export async function LoadCountDoctors() {

    // USE FETCH
    // let res = await fetch(`${API.USERS.GET}/countDoctors`, { method: 'GET' });
    // let data = await res.json();
    // return data;

    // USE AXIOS
    const response = await axios.get(`${API.USERS.GET}/countDoctors`, { timeout: 5000 });
    return response.data;
}


export async function LoadCountUsers() {

    // USE FETCH
    // let res = await fetch(`${API.USERS.GET}/countUsers`, { method: 'GET' });
    // let data = await res.json();
    // return data;

    // USE AXIOS
    const response = await axios.get(`${API.USERS.GET}/countUsers`, { timeout: 5000 });
    return response.data;
}


export async function LoadCountReviews() {

    // USE FETCH
    // let res = await fetch(`${API.REVIEWS.GET}/countReviews`, { method: 'GET' });
    // let data = await res.json();
    // return data;

    // USE AXIOS
    const response = await axios.get(`${API.REVIEWS.GET}/countReviews`, { timeout: 5000 });
    return response.data;
}



// ADMIN WORK

export async function LoadAllUsers() {

    // USE FETCH
    // let res = await fetch(`${API.USERS.GET}`, { method: 'GET' });
    // let data = await res.json();
    // return data;

    // USE AXIOS
    const response = await axios.get(API.USERS.GET, { timeout: 5000 });
    return response.data;
}


export async function LoadAllUsersBlocked() {

    // USE FETCH
    // let res = await fetch(`${API.USERS.GET}/BlockUsers`, { method: 'GET' });
    // let data = await res.json();
    // return data;

    // USE AXIOS
    const response = await axios.get(`${API.USERS.GET}/BlockUsers`, { timeout: 5000 });
    return response.data;
}


export async function LoadAllDoctors() {

    // USE FETCH
    // let res = await fetch(`${API.USERS.GET}/showDoctors`, { method: 'GET' });
    // let data = await res.json();
    // return data;

    // USE AXIOS
    const response = await axios.get(`${API.USERS.GET}/showDoctors`, { timeout: 5000 });
    return response.data;
}


export async function LoadAllReviews() {

    // USE FETCH
    // let res = await fetch(API.REVIEWS.GET, { method: 'GET' });
    // let data = await res.json();
    // return data;

    // USE AXIOS
    const response = await axios.get(API.REVIEWS.GET, { timeout: 5000 });
    return response.data;
}




// USER DATA

export async function LoadMedicalFileUser(code) {

    // USE FETCH
    // let res = await fetch(`${API.MEDICAL_FILE.GET}/${code}`, { method: 'GET' });
    // let data = await res.json();
    // return data;

    // USE AXIOS
    const response = await axios.get(`${API.MEDICAL_FILE.GET}/${code}`, { timeout: 5000 });
    return response.data;
}


export async function showAllMyReview(code) {

    // USE FETCH
    // let res = await fetch(`${API.REVIEWS.GET}/${code}`, { method: 'GET' });
    // let data = await res.json();
    // return data;

    // USE AXIOS
    const response = await axios.get(`${API.REVIEWS.GET}/${code}`, { timeout: 5000 });
    return response.data;
}


export async function LoadMedicalFileUserIsNotActive(code) {

    // USE FETCH
    // let res = await fetch(`${API.MEDICAL_FILE.GET}/showHistoryFiles/${code}`, { method: 'GET' });
    // let data = await res.json();
    // return data;

    // USE AXIOS
    const response = await axios.get(`${API.MEDICAL_FILE.GET}/showHistoryFiles/${code}`, { timeout: 5000 });
    return response.data;
}



// DOCTOR WORK

export async function LoadUsersActive_queues() {

    // USE FETCH
    // let res = await fetch(`${API.USERS.GET}/showTurnUsers`, { method: 'GET' });
    // let data = await res.json();
    // return data;

    // USE AXIOS
    const response = await axios.get(`${API.USERS.GET}/showTurnUsers`, { timeout: 5000 });
    return response.data;
}


export async function LoadMedicalFileAllUsersHowNeedPay() {

    // USE FETCH
    // let res = await fetch(`${API.MEDICAL_FILE.GET}/showHowNeedPay`, { method: 'GET' });
    // let data = await res.json();
    // return data;

    // USE AXIOS
    const response = await axios.get(`${API.MEDICAL_FILE.GET}/showHowNeedPay`, { timeout: 5000 });
    return response.data;
}



// APPOINTMENT

export async function LoadDays() { // 1

    // USE FETCH
    // let res = await fetch(API.DAYS.GET, { method: 'GET' });
    // let data = await res.json();
    // return data;

    // USE AXIOS
    const response = await axios.get(API.DAYS.GET, { timeout: 5000 });
    return response.data;
}