module.exports = {
  beforeCreate(createdEvent) {
    const { data } = createdEvent.params;

    Object.keys(data).forEach((key) => {
      if (typeof data[key] === "string") {
        data[key] = data[key].trim();
      }
      return data;
    });

    if (data.phone) {
      data.phone = data.phone.replace(/\D/g, "");
    }
  },
};
