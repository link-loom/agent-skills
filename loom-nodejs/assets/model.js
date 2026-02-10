const { BaseModel, Property } = require("@link-loom/sdk");

/**
 * @swagger
 * components:
 *    schemas:
 *    Template:
 *      type: object
 *      required:
 *        - name
 *      properties:
 *       # 4. Swagger
 *        name:
 *          type: string
 *          description: Template model name.
 *      example:
 *        name: my property name
 */
class TemplateModel extends BaseModel {
  // 1. Class Declaration
  name;

  entityStatuses = {
    archived: { id: 3, name: "archived", title: "Archived" },
    review: { id: 4, name: "review", title: "Under Review" },
  };

  static get statuses() {
    return { ...BaseModel.defaultStatuses, ...this.prototype.entityStatuses };
  }

  constructor(args, dependencies) {
    if (!args || !dependencies) {
      throw new Error("Required args and dependencies to build this entity");
    }

    super(dependencies);

    this.initializeBaseProperties(args);
    this.initializeEntityProperties(args);
  }

  initializeEntityProperties(args) {
    /**
     * STRICT DEFINITION: All properties must be explicitly defined here.
     * Do not assign specific logic or 'black box' properties outside of this method.
     * This ensures type safety and prepares for TypeScript migration.
     */
    // 2. Initialization
    this.name = new Property({ value: args.name, type: this.types.string });
  }

  // Return entity sanitized
  get sanitized() {
    return {
      id: this.id?.value,
      status: this.status?.value,
      metadata: this.metadata?.value,
      context: this.context?.value,
      name: this.name?.value,
    };
  }

  get get() {
    return {
      id: this.id?.value,
      created: this.created?.value,
      modified: this.modified?.value,
      deleted: this.deleted?.value,
      status: this.status?.value,
      metadata: this.metadata?.value,
      context: this.context?.value,
      // 3. Getter Return
      name: this.name?.value,
    };
  }
}

module.exports = TemplateModel;
