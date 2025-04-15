'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function DinnerPartyPage() {
  const router = useRouter();
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [showTermsModal, setShowTermsModal] = useState(false);

  return (
    <div className="min-h-screen bg-white text-[#4a5568] flex flex-col">
      {/* Header with back button */}
      <header className="w-full p-6 flex items-center">
        <button 
          onClick={() => router.back()}
          className="flex items-center text-[#4a5568] hover:text-[#2d3748] transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Home
        </button>
      </header>

      {/* Main content */}
      <main className="flex-grow flex flex-col items-center justify-center px-4">
        <div className="text-center mb-16">
          <div className="mb-8 mx-auto">
            <div className="h-32 w-32 overflow-hidden rounded-[22%] mx-auto" style={{ 
              filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))',
              background: 'white'
            }}>
              <img 
                src="/images/final-image (4).png" 
                alt="DinnerParty App" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-[#2d3748] mb-4">DinnerParty</h1>
          <p className="text-xl text-[#718096] max-w-2xl mx-auto mb-12">
            A fun way for college students to break out of the norm of only meeting others at parties.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          <button 
            className="px-8 py-4 border-2 border-[#4a5568] text-[#4a5568] rounded-lg hover:bg-[#4a5568] hover:text-white transition-colors duration-300"
            onClick={() => setShowPrivacyModal(true)}
          >
            Privacy Policy
          </button>
          <button 
            className="px-8 py-4 border-2 border-[#4a5568] text-[#4a5568] rounded-lg hover:bg-[#4a5568] hover:text-white transition-colors duration-300"
            onClick={() => setShowTermsModal(true)}
          >
            Terms and Conditions
          </button>
        </div>
      </main>

      {/* Privacy Policy Modal */}
      {showPrivacyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-[#2d3748]">Privacy Policy</h2>
                <button 
                  onClick={() => setShowPrivacyModal(false)}
                  className="text-[#4a5568] hover:text-[#2d3748] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="prose prose-gray max-w-none text-[#4a5568]">
                <p>This privacy policy applies to the DinnerParty app (hereby referred to as "Application") for mobile devices that was created by Ian Carscadden (hereby referred to as "Service Provider") as a Free service. This service is intended for use "AS IS".</p>

                <h3 className="text-lg font-semibold mt-6 mb-2">Information Collection and Use</h3>
                <p>The Application collects information when you download and use it. This information may include information such as</p>
                <ul className="list-disc pl-5 mb-4">
                  <li>Your device's Internet Protocol address (e.g. IP address)</li>
                  <li>The pages of the Application that you visit, the time and date of your visit, the time spent on those pages</li>
                  <li>The time spent on the Application</li>
                  <li>The operating system you use on your mobile device</li>
                </ul>

                <p>The Application does not gather precise information about the location of your mobile device.</p>

                <p>The Service Provider may use the information you provided to contact you from time to time to provide you with important information, required notices and marketing promotions.</p>

                <p>For a better experience, while using the Application, the Service Provider may require you to provide us with certain personally identifiable information. The information that the Service Provider request will be retained by them and used as described in this privacy policy.</p>

                <h3 className="text-lg font-semibold mt-6 mb-2">Third Party Access</h3>
                <p>Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may share your information with third parties in the ways that are described in this privacy statement.</p>

                <p>Please note that the Application utilizes third-party services that have their own Privacy Policy about handling data. Below are the links to the Privacy Policy of the third-party service providers used by the Application:</p>
                <ul className="list-disc pl-5 mb-4">
                  <li>Expo</li>
                </ul>

                <p>The Service Provider may disclose User Provided and Automatically Collected Information:</p>
                <ul className="list-disc pl-5 mb-4">
                  <li>as required by law, such as to comply with a subpoena, or similar legal process;</li>
                  <li>when they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;</li>
                  <li>with their trusted services providers who work on their behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement.</li>
                </ul>

                <h3 className="text-lg font-semibold mt-6 mb-2">Opt-Out Rights</h3>
                <p>You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network.</p>

                <h3 className="text-lg font-semibold mt-6 mb-2">Data Retention Policy</h3>
                <p>The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. If you'd like them to delete User Provided Data that you have provided via the Application, please contact them at ianmcarscadden@gmail.com and they will respond in a reasonable time.</p>

                <h3 className="text-lg font-semibold mt-6 mb-2">Children</h3>
                <p>The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13.</p>

                <p>The Application does not address anyone under the age of 13. The Service Provider does not knowingly collect personally identifiable information from children under 13 years of age. In the case the Service Provider discover that a child under 13 has provided personal information, the Service Provider will immediately delete this from their servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact the Service Provider (ianmcarscadden@gmail.com) so that they will be able to take the necessary actions.</p>

                <h3 className="text-lg font-semibold mt-6 mb-2">Security</h3>
                <p>The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides physical, electronic, and procedural safeguards to protect information the Service Provider processes and maintains.</p>

                <h3 className="text-lg font-semibold mt-6 mb-2">Changes</h3>
                <p>This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to the Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes.</p>

                <p>This privacy policy is effective as of 2025-04-15</p>

                <h3 className="text-lg font-semibold mt-6 mb-2">Your Consent</h3>
                <p>By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by us.</p>

                <h3 className="text-lg font-semibold mt-6 mb-2">Contact Us</h3>
                <p>If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at ianmcarscadden@gmail.com.</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Terms and Conditions Modal */}
      {showTermsModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 md:p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-[#2d3748]">Terms & Conditions</h2>
                <button 
                  onClick={() => setShowTermsModal(false)}
                  className="text-[#4a5568] hover:text-[#2d3748] transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="prose prose-gray max-w-none text-[#4a5568]">
                <p>These terms and conditions apply to the DinnerParty app (hereby referred to as "Application") for mobile devices that was created by Ian Carscadden (hereby referred to as "Service Provider") as a Free service.</p>

                <p>Upon downloading or utilizing the Application, you are automatically agreeing to the following terms. It is strongly advised that you thoroughly read and understand these terms prior to using the Application. Unauthorized copying, modification of the Application, any part of the Application, or our trademarks is strictly prohibited. Any attempts to extract the source code of the Application, translate the Application into other languages, or create derivative versions are not permitted. All trademarks, copyrights, database rights, and other intellectual property rights related to the Application remain the property of the Service Provider.</p>

                <p>The Service Provider is dedicated to ensuring that the Application is as beneficial and efficient as possible. As such, they reserve the right to modify the Application or charge for their services at any time and for any reason. The Service Provider assures you that any charges for the Application or its services will be clearly communicated to you.</p>

                <p>The Application stores and processes personal data that you have provided to the Service Provider in order to provide the Service. It is your responsibility to maintain the security of your phone and access to the Application. The Service Provider strongly advise against jailbreaking or rooting your phone, which involves removing software restrictions and limitations imposed by the official operating system of your device. Such actions could expose your phone to malware, viruses, malicious programs, compromise your phone's security features, and may result in the Application not functioning correctly or at all.</p>

                <p>Please note that the Application utilizes third-party services that have their own Terms and Conditions. Below are the links to the Terms and Conditions of the third-party service providers used by the Application:</p>

                <ul className="list-disc pl-5 mb-4">
                  <li>Expo</li>
                </ul>

                <p>Please be aware that the Service Provider does not assume responsibility for certain aspects. Some functions of the Application require an active internet connection, which can be Wi-Fi or provided by your mobile network provider. The Service Provider cannot be held responsible if the Application does not function at full capacity due to lack of access to Wi-Fi or if you have exhausted your data allowance.</p>

                <p>If you are using the application outside of a Wi-Fi area, please be aware that your mobile network provider's agreement terms still apply. Consequently, you may incur charges from your mobile provider for data usage during the connection to the application, or other third-party charges. By using the application, you accept responsibility for any such charges, including roaming data charges if you use the application outside of your home territory (i.e., region or country) without disabling data roaming. If you are not the bill payer for the device on which you are using the application, they assume that you have obtained permission from the bill payer.</p>

                <p>Similarly, the Service Provider cannot always assume responsibility for your usage of the application. For instance, it is your responsibility to ensure that your device remains charged. If your device runs out of battery and you are unable to access the Service, the Service Provider cannot be held responsible.</p>

                <p>In terms of the Service Provider's responsibility for your use of the application, it is important to note that while they strive to ensure that it is updated and accurate at all times, they do rely on third parties to provide information to them so that they can make it available to you. The Service Provider accepts no liability for any loss, direct or indirect, that you experience as a result of relying entirely on this functionality of the application.</p>

                <p>The Service Provider may wish to update the application at some point. The application is currently available as per the requirements for the operating system (and for any additional systems they decide to extend the availability of the application to) may change, and you will need to download the updates if you want to continue using the application. The Service Provider does not guarantee that it will always update the application so that it is relevant to you and/or compatible with the particular operating system version installed on your device. However, you agree to always accept updates to the application when offered to you. The Service Provider may also wish to cease providing the application and may terminate its use at any time without providing termination notice to you. Unless they inform you otherwise, upon any termination, (a) the rights and licenses granted to you in these terms will end; (b) you must cease using the application, and (if necessary) delete it from your device.</p>

                <h3 className="text-lg font-semibold mt-6 mb-2">Changes to These Terms and Conditions</h3>
                <p>The Service Provider may periodically update their Terms and Conditions. Therefore, you are advised to review this page regularly for any changes. The Service Provider will notify you of any changes by posting the new Terms and Conditions on this page.</p>

                <p>These terms and conditions are effective as of 2025-04-15</p>

                <h3 className="text-lg font-semibold mt-6 mb-2">Contact Us</h3>
                <p>If you have any questions or suggestions about the Terms and Conditions, please do not hesitate to contact the Service Provider at ianmcarscadden@gmail.com.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 