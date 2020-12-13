export async function sendAnswer(q,a){
    return Promise.resolve({
        'question': 2,
        'message': 'Are you feeling sick?',
        'responseType': 'affirm',
        'options': [{label: 'Yes', value: 'yes'},{label: 'No', value: 'no'}],
        'time': '00:00'
    });
}