class CatalogService extends cds.ApplicationService {
  async init() {
    this.on("generateBooks", this.generateBooks);

    await super.init();
  }

  async generateBooks(req) {
    const tx = cds.tx(req);

    const newBooks = req.data.titles.map((title) => {
      return {
        title,
      };
    });

    console.log(newBooks);

    try {
      await tx.create(cds.entities.Books).entries(newBooks);
    } catch (error) {
      req.error(400, `Error during generation `);
    }
    req.reply("done");
  }
}

module.exports = CatalogService;
