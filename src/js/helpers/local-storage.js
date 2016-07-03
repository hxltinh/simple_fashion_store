export function storeAuth(data) {
    localStorage.setItem('accessKey', data.AccessKeyId);
    localStorage.setItem('secretKey', data.SecretKey);
    localStorage.setItem('sessionToken', data.SessionToken);
}

export function getAuth() {
  return {
    accessKey: localStorage.getItem('accessKey') || null,
    secretKey: localStorage.getItem('secretKey') || null,
    sessionToken: localStorage.getItem('sessionToken') || null
  };
}

export function removeAuth() {
  localStorage.removeItem('accessKey');
  localStorage.removeItem('secretKey');
  localStorage.removeItem('sessionToken');
}

export function checkIfHaveAuth() {
  const auth = getAuth();
  return !!auth.accessKey || !!auth.secretKey || !!auth.sessionToken;
}
