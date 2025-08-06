exports.AmountTest = class AmountTest {

    constructor (page) {

        this.page = page;
        
        this.eyeIconFirst = page.getByRole('row', { name: 'view OXR-BU1-GRN-D7P copy-to-' }).getByTestId('icon-button');
        this.detailsButton = page.getByRole('link', { name: 'Details' });
        this.adjustCommision = page.getByTestId('adjust-commission-splits');

        this.firstInputField = page.locator('[id="commissionParticipant[0].money.amount"]');
        this.secondInputField = page.locator('[id="commissionParticipant[1].money.amount"]');
        this.thirdInputField = page.locator('[id="commissionParticipant[2].money.amount"]');
        this.fourthInputField = page.locator('[id="commissionParticipant[3].money.amount"]');

        this.saveButton = page.getByRole('button', { name: 'Save' });

        this.percentageToggleFirst = page.getByText('%$%$').first();
        this.percentageToggleSecond = page.getByText('%$%$').nth(1);
        this.percentageToggleThird = page.getByText('%$%$').nth(2);
        this.percentageToggleThird = page.getByText('%$%$').nth(3)


    }

    
    async navigateToCommisionAdjusting() {
        await this.eyeIconFirst.click();
        await this.detailsButton.click();
        await this.adjustCommision.click();


    }

 
    async allDollarToggle() {


        await this.percentageToggleFirst.click();
        await this.percentageToggleSecond.click();
        await this.percentageToggleThird.click();
        await this.percentageToggleFourth.click();


    }

     async OffOnToggle() {

        await this.percentageToggleFirst.click();
        await this.percentageToggleSecond.click();

    }

    async makeTotalAmount(first, second, third, fourth) {

        // await this.page.firstInputField.isVisible();

        await this.firstInputField.fill(first);
        await this.firstInputField.fill(second);
        await this.firstInputField.fill(third);
        await this.firstInputField.fill(fourth);
        await this.saveButton.click();
   
        console.log('Total Amount Saved');

    }

    async makeTotalPercentage(first, second, third, fourth) {

        await this.allDollarToggle();

        await this.firstInputField.fill(first);
        await this.firstInputField.fill(second);
        await this.firstInputField.fill(third);
        await this.firstInputField.fill(fourth);
        await this.saveButton.click();


        console.log('Total Percentage Wise Saved');

    }

    async mixAmountAndPercentage(third, fourth) {

        await this.OffOnToggle();

        await this.firstInputField.fill(third);
        await this.firstInputField.fill(fourth);
        await this.saveButton.click();

    }

}