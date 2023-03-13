import {View, Text, FlatList} from 'react-native';

import React, {useState} from 'react';
import Collapsible from 'react-native-collapsible';
import CollapseFAQ from '../components/CollapseFAQ';

export default function FAQ() {
  const [isCollapsed, setisCollapsed] = useState(true);
  const data = [
    {
      heading: 'What is Alfalah Asset Management Limited(AAML)?',
      detail:
        'Alfalah Asset Management Limited is a Non-banking Finance Company licensed by the Securities & Exchange Commission of Pakistan (SECP) to undertake asset management and investment advisory services in Pakistan is a joint venture company established by Bank Alfalah Ltd. and GHP Arbitrium (Formerly GHP Financial Services Limited), a Switzerland based Fund Manager.',
    },
    {
      heading: 'What is Mutual Funds?',
      detail:
        'A mutual fund is a trust or a company that pools resources from various investors by selling them units and then invests those funds into various investment instruments and securities on behalf of the unit holders with a view to increasing the underlying value of the investment portfolio.\n A mutual fund is a separate entity from the asset management company that manages that mutual fund.',
    },
    {
      heading: 'How is AAML Linked with Bank Alfalah?',
      detail:
        'AAML is an asset management company established under NBFC Rules and is classified as a Non-Banking Finance Company.\n AAML is a separate business entity having a separate board of directors.It is a subsidiary of Bank Alfalah Limited.Bank Alfalah Limited (BAFL) is engaged in commercial banking and related services as defined in the Banking Companies Ordinance, 1962.\n BAL cannot undertake asset management activities.Bank Alfalah Limited is acting as a distributor for AGIML in marketing it’s products to the public.',
    },
    {
      heading: 'What is a Trust Deed?',
      detail:
        'A Trust Deed is the constitutive document on which the fund is based. The Trust Deed is executed between the asset management company and the trustee. The Trust Deed sets out all the relevant operational and managerial procedures by which the fund will be managed.\n The Trust Deed is a public document and can be viewed by any prospective investor.',
    },
    {
      heading: 'What is Trustee?',
      detail:
        'The Trustee is an independent custodian of all fund assets and property and acts to protect the interest of the unit holders and ensures that Fund assets are properly invested in line with the Offering Document, Trust Deed and the NBFC Rules 2003.\n As an added safeguard for investors, the title to all assets owned by the fund is held by the Trustee.',
    },
    {
      heading: 'What is a "Prospectus" or "Offering Document"?',
      detail:
        'A “Prospectus” or an “Offering Document” is a legal document, approved by the Securities & Exchange Commission of Pakistan which highlights details about the mutual fund for the benefit and knowledge of potential investors.\nIt provides information about a mutual fund covering its establishment, investment strategy, borrowing restrictions, trustee’s profile, auditors’ profile, risk profile, expense profile, management company profile, procedures relating to purchase / redemption / conversion of units,fees / charges payable by investors, fees payable by the mutual fund, mode of unit price announcement etc. in order to facilitate informed decision making by potential investors.',
    },
    {
      heading: 'Why should one invest in a mutual fund?',
      detail:
        'Individual and Corporate should invest in a mutual fund because a mutual fund provides them the appropriate investment vehicle through which they can benefit from the rewards of capital market investing. Investors who do not have the time and expertise to monitor their investments and want to take exposure in the capital markets and its positive returns can benefit from professional management and market knowledge offered by a mutual fund.\n An investor has the following advantages when he/she invests in AAML managed funds in particular:\n \u2022 Professional Management\n  \u2022 Diversification\n  \u2022 Market Knowledge\n  \u2022 Risk Management\n  \u2022 Liquidity\n  \u2022 Reasonable Returns',
    },
    {
      heading:
        'What is difference betwwen an Open-ended Fund and Closed-end Fund?',
      detail:
        'An Open-ended Fund constantly offers its units for sale to investors and purchases / buys back all units offered for redemption by investors. Sale and purchase take place at declared offer/redemption prices. There is no limit on the number of units outstanding or the size of the fund. There is no liquidity issue.\n A Closed-end Fund, on the other hand, offers a limited number of certificates for sale and is not open for further investors once the targeted investment amount is met. Trading of certificates is done at the stock exchange through stockbrokers. At times it may be difficult to dispose of large blocks of certificates on the stock market.',
    },
    {
      heading: 'What is NAV & NAV per unit?',
      detail:
        'NAV stands for Net Asset Value of the fund. NAV is calculated by adding up all the Funds assets minus the liabilities or any other claims on the fund. NAV per unit is calculated by dividing the NAV with the units outstanding. A fund’s NAV goes up or down daily as per the underlying value of the holdings in the fund’s portfolio.',
    },
    {
      heading:
        'What are costs incurred by investors in buying Mutual Funds Units',
      detail:
        'Following are a few costs (transaction specific) which an investor has to bear when he invests with a mutual fund, namely:\n \u2022 “Sales Load” this charge is applicable to investors when they purchase units.\n \u2022 “Redemption Fee” this charge is applicable to unit holders when they exit the mutual fund.\n \u2022“Management Fee” this charge is an Annual Fee payable by the mutual fund to the management company for managing the mutual fund. As per NBFC Rules an asset management company can charge upto 3% of the average net annual assets of the fund for the first five years of its operations and then upto 2% of such average net annual assets.\n The above mentioned costs are subject to change from time to time after meeting the necessary regulatory approvals and formalities as required. ',
    },
    {
      heading: 'What is Offer Price and Redemption Price?',
      detail:
        'Offer Price is the price that an investor pays when he purchases a unit. It is equivalent to the NAV per unit plus the applicable sales load. Redemption Price is the price that an investor gets when he sells his units to the fund.It is equivalent to the NAV minus back-end / redemption charges (if any).',
    },
    {
      heading: 'what is Sale Load?',
      detail:
        'Sales load is a charge that an investor pays when he purchases units of a mutual fund. The sales load is used to pay sales and marketing expenses incurred for selling the units.',
    },
    {
      heading: 'Is there any Redemption or encashment fee?',
      detail: 'There is no encashment or redemption fee.',
    },
    {
      heading: 'How do I invest?',
      detail:
        'Making an investment in one or more funds managed by AGIML is a simple process. The first step is to open an account with AGIML by filling out Section 1 – Section 5 of the Account Opening & Unit Transaction Form (AGIML-01) available for downloading on the company’s website.\n An investor must also provide Investment Details (Section – 6) in the above form accompanied by the payment for the investment, a Know your Customer form, and a Source of Income form, along with other Required Documentation.\n The above documents should be delivered at any of the Authorized Branches of the Distribution Company, or to the Investment Facilitator, or may be submitted directly to the Management Company.',
    },
    {
      heading: 'How do I Redeem?',
      detail:
        'Redeeming your investment, partially or entirely, simply requires you to submit the Account Opening and Unit Transaction Form (AGIML-01) with Redemption Details (Section 7) filled in.\n You can also redeem online via Alfalah GHPs online portal. For further information on how to use these services, kindly look for “Online” in Navigation Menu of website. ',
    },
    {
      heading: 'How do I convert from one Fund to another?',
      detail:
        'In order to convert your investment from one fund to another, you need to submit the duly filled in Fund to Fund/ Conversion form ( D-1 ), indicating the fund from which investment is being converted, along with the amount, and the fund into which investment is being converted, along with the amount.\n The duly completed form with the Fund Swap Details should be delivered at any of the Authorized Branches of the Distribution Company, or to the Investment Facilitator, or may be submitted directly to the Management Company.\n You can also make Online Conversions via Alfalah GHPs Online Portal. For further information on how to use these services, kindly look for “Online” in Navigation Menu of website.',
    },
    {
      heading: 'Will I receive confirmation of my investment?',
      detail:
        'At your discretion, you can either receive an account statement showing Fund units held in your name and / or you can get physical certificates for your holding of Fund’s units (at a nominal charge).',
    },
    {
      heading: 'How do I get an acccount statement?',
      detail:
        'You may contact us by email at aghp.is@alfalahghp.com, or by phone at (021) 111-090-090 and convey your requirement to our investor services representative and the requested account statement will be dispatched to you via mail/fax/email, as per your preference.',
    },
    {
      heading: 'What are cut-off times of investments in AGIML Funds?',
      detail:
        'The cut-off time for investment in AGIML funds is 9:00 am to 4:00 pm on any business day. Any change in timings due to any reason shall be communicated to investors via email and SMS.',
    },
    {
      heading: 'How will you pay the proceeds back to us?',
      detail:
        'Your proceeds can be transferred to your designated account as per instructions given by you in the Investor Account Opening form (AGIML – 01) which you have already submitted along with your initial investment or you can ask for a crossed cheque in favour of the principal account holder.',
    },
    {
      heading:
        'Do I need to have an account with Bank Alfalah Limited to make investment in AGIML manged funds?',
      detail:
        'No. You do not need an account with Bank Alfalah Limited to invest in AGIML managed funds. However, you need to open up an account with AGIML by filling the Investor Account Opening Form. (AGIML – 01)',
    },
    {
      heading: 'Is my investment in and return from AGIML Funds guaranteed',
      detail:
        'No. The investments and returns of AGIML funds are not guaranteed, with the exception of the AGIML Capital Preservation Fund, in which principal investment is guaranteed.\n All investments in Mutual Funds and securities are subject to market risk. The NAV based prices of units and any dividends and returns thereon are dependent on forces and factors affecting capital markets and as such these may go up or down based on market conditions.\n Past performance is not necessarily indicative of future results. AGIML, its sponsors, partners, directors, affiliates or any group company does not guarantee any results nor any performance of the fund. Investors are advised to read the relevant sections of the Offering Document for further understanding of the investment policies and risks involved.',
    },
    {
      heading: 'What is an FMR?',
      detail:
        'FMR is a Fund Manager Report that is prepared on a monthly basis and placed on the company’s website. The FMR contains a synopsis of each fund’s performance in the previous month and other relevant details regarding the funds.',
    },
    {
      heading: 'How do I get the daily NAV?',
      detail:
        'The per-unit Net Asset Value of each fund is prepared on a daily basis and is sent via SMS to each investor. It is also updated on the website of the company every evening',
    },
    {
      heading: 'Do Funds pay Dividends',
      detail:
        'Yes, in order to qualify for their tax-exempt status, mutual funds are mandated to payout 90% of their income, less unrealized capital gains, as cash dividends.',
    },
    {
      heading: 'Who to contact for further queries and fund information?',
      detail:
        'Feedback can be submitted in one of the following ways:\n By calling AGIML Help line at (021) 111-090-090\n Email: aghp.is@alfalahghp.com',
    },
    {
      heading: 'SiteMap',
      detail: '\u2023 Front Page\n \u2023 Alfalah GHP Introduction\n \u2023',
    },
  ];
  return (
    <FlatList
      data={data}
      renderItem={(index) => (
        <CollapseFAQ
          heading={index.item.heading}
          detail={index.item.detail}></CollapseFAQ>
      )}
    />
  );
}
