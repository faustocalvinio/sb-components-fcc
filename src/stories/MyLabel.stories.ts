import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../components/MyLabel";


const meta = {
    title:'UI/labels/MyLabel',
    component: MyLabel,
    tags: ['autodocs'],
    parameters:{
        layout:'centered'
    },
    argTypes:{
        size:{ control:{type:'inline-radio'}, },
        fontColor:{ control:{type:'color'} },

    }
} satisfies Meta<typeof MyLabel>;


export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
    args:{
        label:'Basic Label',
        size:'normal'
    }
};

export const AllCaps: Story = {
    args:{
        label:'AllCaps Label',
        allCaps:true,
    }
};


export const Secondary: Story = {
    args:{
        label:'Secondary Label',
        color:'text-secondary'
    }
};

export const CustomColor: Story = {
    args:{
        label:'CustomColor Label',
        fontColor:'#ff0000'
    }
};