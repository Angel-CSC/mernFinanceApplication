/*
import mongoose from "mongoose";
import { loadType } from  "mongoose-currency";

const Schema = mongoose.Schema;
loadType(mongoose)

const daySchema = new Schema(
    {
        date: String,
        revenue: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v/100
        },
        expenses: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v/100
        }
        
    },
    {toJSON: {getter: true}}
);

const monthSchema = new Schema(
    {
        month: String,
        revenue: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v/100
        },
        expenses: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v/100
        },
        operationalExpenses: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v/100
        },
        nonOperationalExpenses: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v/100
        },
        
    },
    {toJSON: {getter: true}}
);

const KPISchema = new Schema(
    {
        totalProfit: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v/100
        },
        totalRevenue: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v/100
        },
        totalExpenses: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v/100
        },
        expensesByCategory: {
            type: Map,
            of: {
                type: mongoose.Types.Currency,
                currency: "USD",
                get: (v) => v/100
            }
        },
        monthlyData: [monthSchema],
        dailyData: [daySchema]
    },
    {
        timestamps: true,
        toJSON: {getters: true}
    },
)

const KPI = mongoose.model("KPI", KPISchema);

export default KPI;
*/

import mongoose from "mongoose";
import { loadType } from "mongoose-currency";

class MapSchemaType extends mongoose.SchemaType {
    constructor(key, options) {
      super(key, options, 'Map');
    }
  
    cast(val) {
      // Ensure val is a Map
      if (!(val instanceof Map)) {
        throw new Error('MapSchemaType: Value must be a Map');
      }
  
      // Validate each value in the Map
      const result = new Map();
      val.forEach((value, key) => {
        result.set(key, this.castForKey(value));
      });
      return result;
    }
  
    castForKey(val) {
      if (this.options.of && typeof this.options.of.cast === 'function') {
        return this.options.of.cast(val);
      }
      return val;
    }
  }
  
  mongoose.Schema.Types.Map = MapSchemaType;

const Schema = mongoose.Schema;
loadType(mongoose);

const daySchema = new Schema(
  {
    date: String,
    revenue: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    expenses: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
  },
  { toJSON: { getters: true } }
);

const monthSchema = new Schema(
  {
    month: String,
    revenue: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    expenses: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    operationalExpenses: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    nonOperationalExpenses: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
  },
  { toJSON: { getters: true } }
);

const categorySchema = new Schema(
    {
        category: String,
        expenses: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v/100
        }
    }
)

const KPISchema = new Schema(
  {
    totalProfit: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    totalRevenue: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    totalExpenses: {
      type: mongoose.Types.Currency,
      currency: "USD",
      get: (v) => v / 100,
    },
    expensesByCategory: {
        type: Map,
        of: {
            type: mongoose.Types.Currency,
            currency: "USD",
            get: (v) => v/100
        }
    },
    monthlyData: [monthSchema],
    dailyData: [daySchema],
  },
  { timestamps: true, toJSON: { getters: true } }
);

const KPI = mongoose.model("KPI", KPISchema);

export default KPI;