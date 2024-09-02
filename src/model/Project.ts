export interface Project {
    readonly projectId: string;
    readonly description: string;
    readonly requestedAmount: number;
    readonly donationEndDate: number;
    readonly donationStartDate: number;
    readonly innovatorId: string;
    readonly name: string;
    readonly receivedDonationAmount: number;
    readonly status: string;
    readonly subCategory: string
}