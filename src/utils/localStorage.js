class Lstorage {
  get = () => {
    const lsStringState = localStorage.getItem("stateOfVoicePadByMehediHasan");
    const lsState = JSON.parse(lsStringState);
    return lsState;
  };

  save = (state) => {
    const stringState = JSON.stringify(state);
    localStorage.setItem("stateOfVoicePadByMehediHasan", stringState);
  };
}

const lstorage = new Lstorage();

export default lstorage;
