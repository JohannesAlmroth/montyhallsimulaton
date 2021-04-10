const getUrl = function(path) {
	return `localhost:5001/api/${path}`;
}

const postData = async function (path, payload) {
    let url;
    let res;
    console.log(payload);
    try {
        url = getUrl(path);
        res = await fetch(url, {
					method: 'POST',
					body: JSON.stringify(payload),
					headers: {
                        'Accept': 'application/json',
						'Content-Type': 'application/json; charset=utf-8'
        }
        });

        const body = await res.json();
        if (res.status >= 200 && res.status < 400) {
            return {
                data: body
            };
        } else {
            return {
                error: {
                    code: res.status.toString(),
                    message: body
                }
            };
        }
    } catch (e) {
        return {
            error: {
                code: '500',
                message: e.toString()
            }
        };
    }
};

export const getResult = async function(obj) {
	return await postData('pick/one', obj);
}