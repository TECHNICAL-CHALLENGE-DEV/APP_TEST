import apiDefault from "./apiDefault";

type GetAllProps = {
  latitude?: number,
  longitude?: number
}

export default {
  async getAll({ latitude = -12.111831, longitude = -77.011884 }: GetAllProps) {
    const url = `stores?latitude=${latitude}&longitude=${longitude}`;
    return await apiDefault.get({ url })
  },
}