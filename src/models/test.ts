import { Schema, model } from 'mongoose';

export interface ITest {
  name: string;
}

const testSchema = new Schema<ITest>({
  name: {
    type: String,
    required: true,
    // mongoose model min length
    minlength: 3,
    // mongoose model max length
    maxlength: 20,
  }
}, {timestamps: true});

// 3. Create a Model.
export const Test = model<ITest>('Test', testSchema);
